const db = require("../db");
const bcrypt = require("bcrypt");
const errors = require("../utils/errors");
const saltRounds = 10;
const users = {};


users.signUp = async (userName, location, firstName, lastName, email, password) => {
    const today = new Date();
    const hash = bcrypt.hashSync(password, saltRounds);

    const check = await db.query(
        "SELECT userName FROM users u WHERE u.username = $1", 
        userName);

    if (check.rowCount >= 1) {
        console.log("Username already in use.");
        throw new errors.BadRequestError("Username already in use.");
    }

    const values= [userName, hash, firstName, lastName, email, today, location];
    values.forEach(function(arg) {
        if (arg == null) {
            console.log("null value for user sign-up");
            throw new errors.BadRequestError("null value for user sign-up");
        }
    });
    const res = await db.query(
        "INSERT INTO users(username, password, first_name, last_name, email, created_at, location) VALUES ($1, $2, $3, $4, $5, $6, $7);", 
        values);
};

users.logIn = async (userName, password, loggedIn) => {
    if (loggedIn) {
        console.log("User already logged in");
        return;
    }
    const hash = bcrypt.hashSync(password, saltRounds);
    const values = [userName, hash];

    const res = await db.query(
        "SELECT userName FROM users u WHERE u.username = $1 AND u.password $2", 
        values);

    return res;
};

module.exports = users;