const express = require("express");
const User = require("../models/users");
const router = express.Router();
const security = require("../middleware/security");

const { createUserJwt } = require("../utils/tokens");

// userName, location, firstName, lastName, email, password
//req.userName, req.location, req.firstName, req.lastName, req.email, req.password, req.loggedIn
//req.userName, req.password, req.loggedIn
router.post("/sign-up", async (req, res, next) => {
    try {
        const user = await User.signUp(req, res);
        const token = createUserJwt(user);
        return res.status(201).json({ token, user });
    } catch (error) {
        next(error);
    }
});

router.post("/log-in", async (req, res, next) => {
    try {
        const user = await User.logIn(req, res);
        const token = createUserJwt(user);
        return res.status(200).json({ token, user });
    } catch (error) {
        next(error);
    }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { email } = res.locals.user;
        const user = await User.fetchUserByEmail(email);
        const publicUser = await User.makePublicUser(user);
        return res.status(200).json({ user: publicUser });
    } catch (err) {
        next(err);
    }
});

router.put('/location', security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const location = await User.setLocation(req.body, res.locals.user.email);
        return res.status(200).json({location});
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
