const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const compression = require("compression");
const { HISTORICAL_PRICE } = require("./urls");

app = express();
app.use(express.json({ extended: false, limit: "5mb" }));
app.use(helmet());
app.use(compression());

app.use(HISTORICAL_PRICE, require("./routes/stock.price"));

module.exports = app;
