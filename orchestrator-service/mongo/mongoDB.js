require("dotenv").config();
const mongoose = require("mongoose");
const getDB = require("./getDB");
const MONGO_DB_SERVICE = process.env.MONGO_DB_SERVICE;
const CONSUMER_SERVICE = process.env.CONSUMER_SERVICE;

const connectDB = async () => {
  try {
    const URL = getDB(process.env.NODE_ENV);
    // console
    // .log
    // `starting connection between the ${CONSUMER_SERVICE} and ${MONGO_DB_SERVICE} in env ${process.env.NODE_ENV}`
    // ();
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    // console.log(`${CONSUMER_SERVICE} is connected to ${MONGO_DB_SERVICE}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

module.exports = connectDB;
