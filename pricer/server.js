const app = require("./app");

const PORT = process.env.PORT || 3000;
const APPLICATION = process.env.APPLICATION;

app.listen(PORT, () =>
  console.log(`${APPLICATION} is listening in port ${PORT}`)
);
