const express = require('express')
const helmet = require("helmet");
const compression = require("compression");

app = express()

app.use(express.json({ extended: false, limit: "5mb" }));
app.use(helmet())
app.use(compression())


module.exports = app