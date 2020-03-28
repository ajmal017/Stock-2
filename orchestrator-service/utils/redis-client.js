const redis = require('redis');
const { promisify } = require('util');
const client = redis.createClient({ host: process.env.REDIS_SERVICE, port: process.env.REDIS_PORT })

client.on('error', (err) => {
    console.log("Redis client connection error " + err);
});

client.on('connect', function () {
    console.log('Redis client connected');
});

const setSync = () => {

}
module.exports = {
    ...client,
    getAsync: promisify(client.get).bind(client),
    setAsync: promisify(client.set).bind(client),
    setexAsync: promisify(client.setex).bind(client),
    keysAsync: promisify(client.keys).bind(client),
};