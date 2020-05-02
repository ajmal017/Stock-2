const express = require('express')
const helmet = require("helmet");
const compression = require("compression");
const mongo = require('./mongo/mongo')

mongo()

app = express()

app.use(express.json({ extended: false, limit: "5mb" }));
app.use(helmet())
app.use(compression())

app.use('/', require('./routes/auth'))

module.exports = app