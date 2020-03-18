const urlMaker = require('./urlMaker')
const axios = require('axios')
const Requester = require('./Requester')


const getHistoricData = async (tickers) => {
    try {
        if (!tickers) throw new Error('no ticker passed to requester')
        const results = []
        for (ticker of tickers) {
            const url = urlMaker(ticker)
            const requester = new Requester()
            const res = await requester.get(url)
            results.push(res)
        }
        return results
    } catch (error) {
        console.log(error)
        throw error
    }
}


module.exports = getHistoricData