const express = require("express");
const controller = require("../controllers/stock.price");
const { param } = require("express-validator");

router = express.Router();

router.get(
  "/:symbol",
  [
    param("symbol", "symbol is required")
      .not()
      .isEmpty()
  ],
  controller.stockPrice
);

module.exports = router;
