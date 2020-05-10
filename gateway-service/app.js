const express = require('express')
const helmet = require("helmet");
const compression = require("compression");
const cors = require('cors')
const cookieParser = require('cookie-parser')
app = express()

app.use(express.json({ extended: false, limit: "5mb" }));
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(cookieParser())

app.use('/', require('./routes/stock.routes'))
app.use('/identity', require('./routes/identity.routes'))
app.use('/portfolio', require('./routes/portfolio.routes'))

module.exports = app