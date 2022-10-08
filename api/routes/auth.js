const express = require("express");
const users = require("../models/users");
const authRoutes = express.Router();
const { createUserJwt } = require("../utils/tokens");


// userName, location, firstName, lastName, email, password
//req.userName, req.location, req.firstName, req.lastName, req.email, req.password, req.loggedIn
//req.userName, req.password, req.loggedIn
authRoutes.post('/sign-up', (req, res) => {
    const user = users.signUp(req, res);
    const token = createUserJwt(user);
    return res.status(201).json({token, user});
});
authRoutes.post('/log-in', (req, res) => {
    const user = users.logIn(req, res);
    const token = createUserJwt(user);
    return res.status(200).json({token, user});
});

module.exports = authRoutes;

