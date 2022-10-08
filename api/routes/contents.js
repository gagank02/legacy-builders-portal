const express = require('express')
const contentRoutes = express.Router()

contentRoutes.get('/', (req, res) => {
    res.send('hello world')
    console.log("test");
})

module.exports = contentRoutes;