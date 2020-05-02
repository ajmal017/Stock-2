const setCookie = (name, token, res) => {
  if (!name || !token || !res) throw new Error();
  const options = {
    httpOnly: true,
    expires: Date.now() + 1200000,
    secure: process.env.NODE_ENV === "production" ? false : false,
    maxAge: 1200000,
    sameSite: "Lax"
  };
  res.cookie(name, token, options);
};

module.exports = setCookie;
