const mongoose = require("mongoose");

const CONSUMER_SERVICE = 'IDENTITY'
const NODE_ENV = process.env.NODE_ENV
const MONGO_URL = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0-0hmcf.mongodb.net/${CONSUMER_SERVICE}-${NODE_ENV}?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`${CONSUMER_SERVICE} is connected to MONGO`);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

module.exports = connectDB;
