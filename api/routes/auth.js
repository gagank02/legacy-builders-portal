const express = require("express");
const users = require("../models/users");
const authRoutes = express.Router();

// userName, location, firstName, lastName, email, password
authRoutes.post('/sign-up', users.signUp(req.userName, req.location, req.firstName, req.lastName, req.email, req.password));

module.exports = authRoutes;

