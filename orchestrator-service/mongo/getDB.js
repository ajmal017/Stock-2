require("dotenv").config();

const MONGO_DB_SERVICE = process.env.MONGO_DB_SERVICE;
const CONSUMER_SERVICE = process.env.CONSUMER_SERVICE;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;

devUrl = `mongodb://${MONGO_DB_SERVICE}/${CONSUMER_SERVICE}-dev`;
testUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}${CONSUMER_SERVICE}-test?retryWrites=true&w=majority`;
prodUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}${CONSUMER_SERVICE}-prod?retryWrites=true&w=majority`;

const getDB = env => {
  if (env === "development") return devUrl;
  else if (env === "test") return testUrl;
  else if (env === "production") return prodUrl;
  else throw new Error("NODE_ENV not set");
};

module.exports = getDB;
