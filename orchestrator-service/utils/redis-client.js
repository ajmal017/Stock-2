const redis = require('redis');
const { promisify } = require('util');
const dotenv = require('dotenv').config()
const client = redis.createClient({ host: process.env.REDIS_SERVICE })

client.on('error', (err) => {
    console.log("Error " + err);
});

client.on('connect', function () {
    console.log('Redis client connected');
});
module.exports = {
    ...client,
    getAsync: promisify(client.get).bind(client),
    setAsync: promisify(client.set).bind(client),
    setexAsync: promisify(client.setex).bind(client),
    keysAsync: promisify(client.keys).bind(client),
};