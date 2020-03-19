const dotenv = require('dotenv').config()
const API_KEY = process.env.API_KEY

const urlMaker = (ticker) => {
    return `https://api.worldtradingdata.com/api/v1/history?symbol=${ticker}&api_token=${API_KEY}&sort=oldest`
}

module.exports = urlMaker