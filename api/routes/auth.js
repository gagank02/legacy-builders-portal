const express = require("express");
const User = require("../models/users");
const authRoutes = express.Router();
const { createUserJwt } = require("../utils/tokens");

// userName, location, firstName, lastName, email, password
//req.userName, req.location, req.firstName, req.lastName, req.email, req.password, req.loggedIn
//req.userName, req.password, req.loggedIn
authRoutes.post("/sign-up", async (req, res, next) => {
    try {
        const user = await User.signUp(req, res);
        const token = createUserJwt(user);
        return res.status(201).json({ token, user });
    } catch (error) {
        next(error);
    }
});

authRoutes.post("/log-in", async (req, res, next) => {
    try {
        const user = await User.logIn(req, res);
        const token = createUserJwt(user);
        return res.status(200).json({ token, user });
    } catch (error) {
        next(error);
    }
});

module.exports = authRoutes;
