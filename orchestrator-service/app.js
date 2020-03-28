const express = require('express')
const helmet = require("helmet");
const compression = require("compression");
var cors = require('cors')

app = express()

app.use(express.json({ extended: false, limit: "5mb" }));
app.use(helmet())
app.use(compression())
app.use(cors())


app.use('/', require('./routes/stock.routes'))

module.exports = app