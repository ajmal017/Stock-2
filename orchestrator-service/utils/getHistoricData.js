const urlMaker = require('./urlMaker')
const axios = require('axios')
const dotenv = require('dotenv').config()
const { PRICER_STOCK, PRICER_STOCK_WORLD_TRADING } = process.env


const getHistoricData = async (tickers) => {
    try {
        const result = []
        for (tick of tickers) {
            const res = await axios.post(PRICER_STOCK, { ticker: tick })
            result.push(res.data)
        }
        return result
    } catch (error) {
        console.log('historic data failed')
        throw error
    }
}


module.exports = getHistoricData