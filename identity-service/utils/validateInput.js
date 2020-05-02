const { validationResult } = require("express-validator/");

const validateInput = req => {
  const e = validationResult(req);
  if (!e.isEmpty()) {
    return e;
  }
  return false;
};

module.exports = validateInput;
