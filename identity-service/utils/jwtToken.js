const jwt = require("jsonwebtoken");

const jwtToken = async payload => {
  if (!payload) throw new Error();
  const token = await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_DURATION,
    algorithm: "HS256"
  });
  return token;
};

module.exports = jwtToken;
