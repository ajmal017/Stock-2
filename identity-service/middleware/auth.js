const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    console.log("auth");
    const token = req.cookies.Authorization;

    console.log(token);

    if (!token) return res.status(401).json({ msg: "Invalid Credentials" });

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: "HS256",
      complete: true
    });
    if (decodedToken.header.alg !== "HS256") {
      throw new Error();
    }

    console.log(decodedToken);

    req.body = { ...req.body, ...decodedToken.payload };
    console.log(req.body);
    next();
  } catch (e) {
    res.clearCookie("Authorization");
    return res.sendStatus(500);
  }
};
module.exports = auth;
