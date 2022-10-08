const express = require("express");
const users = require("../models/users");
const authRoutes = express.Router();

// userName, location, firstName, lastName, email, password
//req.userName, req.location, req.firstName, req.lastName, req.email, req.password, req.loggedIn
//req.userName, req.password, req.loggedIn
authRoutes.post('/sign-up', (req, res) => {
    users.signUp(req, res)
});
authRoutes.post('/log-in', (req, res) => {
    users.logIn(req, res)
});

module.exports = authRoutes;

