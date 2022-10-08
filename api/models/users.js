const db = require("../db");
const bcrypt = require("bcrypt");
const { BadRequestError } = require("../utils/errors");
const saltRounds = 10;
const { BCRYPT_WORK_FACTOR } = require("../config");

class User {
    static async fetchUserByUsername(username) {
        if (!username) {
            throw new BadRequestError("No username provided");
        }
        const query = `SELECT * FROM users WHERE username = $1`;
        const result = await db.query(query, [username]);
        const user = result.rows[0];
        return user;
    }

    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided");
        }
        const query = `SELECT * FROM users WHERE email = $1`;
        const result = await db.query(query, [email.toLowerCase()]);

        const user = result.rows[0];

        return user;
    }

    static async makePublicUser(user) {
        return {
            id: user.id,
            userName: user.username,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            createdAt: user.created_at,
            location: user.location,
        };
    }

    static async signUp(req, res) {
        const credentials = req.body;
        const requiredFields = [
            "email",
            "userName",
            "firstName",
            "lastName",
            "password",
        ];

        requiredFields.forEach((field) => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`);
            }
        });

        const lowercasedEmail = credentials.email.toLowerCase();
        const hashedPassword = await bcrypt.hash(
            credentials.password,
            BCRYPT_WORK_FACTOR
        );

        const check = await db.query(
            "SELECT * FROM users u WHERE u.username = $1",
            [credentials.userName]
        );

        if (check.rowCount >= 1) {
            console.log("Username already in use.");
            throw new BadRequestError("Username already in use.");
        }

        const dbRes = await db.query(
            "INSERT INTO users(username, password, first_name, last_name, email, location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING username, first_name, last_name, email, created_at, location;",
            [
                credentials.userName,
                hashedPassword,
                credentials.firstName,
                credentials.lastName,
                lowercasedEmail,
                credentials.location || "",
            ]
        );
        return User.makePublicUser(dbRes.rows[0]);
    }

    static async logIn(req, res) {
        const credentials = req.body;
        const requiredFields = ["userName", "password"];
        requiredFields.forEach((field) => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`);
            }
        });

        const user = await User.fetchUserByUsername(credentials.userName);
        if (user) {
            const isValid = await bcrypt.compare(
                credentials.password,
                user.password
            );
            if (isValid) {
                return User.makePublicUser(user);
            }
        } else {
            await bcrypt.compare(
                "$2b$13$YFcwwKjaYhqqEuGHFlH.vO2I85GC2SSAEw5d5ATpAWvFi4haHGsyq",
                credentials.password
            );
        }
        throw new UnauthorizedError("Invalid username or password");
    }

    static async setLocation(values, email) {
        console.log(email);

        let results = await db.query(
            `
            update users set location = $1 where email = $2 returning *;
            `,
            [values.location, email]
        );
        console.log(results);
        return User.makePublicUser(results.rows[0]);
    }
}

module.exports = User;
