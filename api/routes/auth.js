const express = require('express')
const authRoutes = express.Router()

authRoutes.post('/sign-up', (req, res) => {
    res.send('hello world')
    console.log("test");
})

module.exports = authRoutes;

