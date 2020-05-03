const { validationResult } = require("express-validator/");

const inputValidator = (req, res, next) => {
  const e = validationResult(req)
  if (e.isEmpty()) return next()
  else return res.status(422).json({ message: e.array() });
}

module.exports = inputValidator;
