const axios = require('axios')
const dotenv = require('dotenv').config()
const { PRICER_STOCK, PRICER_SERVICE , PRICER_WORLD_TRADING} = process.env
const redisClient = require('./redis-client')

const getHistoricData = async (tickers) => {
    try {
        const result = []
        for (tick of tickers) {

            res = await axios.post(`${PRICER_SERVICE}${PRICER_WORLD_TRADING}`, { ticker: tick })
            const expiration = parseInt((new Date().setHours(23, 59, 59, 999) - new Date()) / 1000)
            await redisClient.setexAsync(tick, expiration, JSON.stringify(res.data))
            result.push(res.data)
            console.log('data from calculator used', tick)

        }
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}


module.exports = getHistoricData