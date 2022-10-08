const db = require("../db");
const bcrypt = require("bcrypt");
const errors = require("../utils/errors");
const saltRounds = 10;
const users = {};

//req.userName, req.location, req.firstName, req.lastName, req.email, req.password, req.loggedIn
//req.userName, req.password, req.loggedIn
users.signUp = async (req, res) => {
    const today = new Date();
    const hash = bcrypt.hashSync(req.body.password, saltRounds);

    const check = await db.query(
        "SELECT userName FROM users u WHERE u.username = $1", 
        req.body.userName);

    if (check.rowCount >= 1) {
        console.log("Username already in use.");
        throw new errors.BadRequestError("Username already in use.");
    }

    const values= [req.body.userName, hash, req.body.firstName, req.body.lastName, req.body.email, today, req.body.location];
    values.forEach(function(arg) {
        if (arg == null) {
            console.log("null value for user sign-up");
            throw new errors.BadRequestError("null value for user sign-up");
        }
    });
    const ret = await db.query(
        "INSERT INTO users(username, password, first_name, last_name, email, created_at, location) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING username, first_name, last_name, email, created_at, location;", 
        values);
    return ret;
};

users.logIn = async (req, res) => {
    if (req.body.loggedIn) {
        console.log("User already logged in");
        return;
    }
    tokens.generateToken()
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const values = [req.body.userName, hash];

    const ret = await db.query(
        "SELECT * FROM users u WHERE u.username = $1 AND u.password $2", 
        values);

    return ret;
};

module.exports = users;