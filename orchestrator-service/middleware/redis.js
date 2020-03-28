const getHistoricData = require('../utils/getHistoricDataNoCache')

const redis = async (req, res, next) => {
    try {
        const { tickers } = req.body
        console.log('redis middleware', tickers)
        const data = await getHistoricData(tickers)
        req.body.historicData = data
        next()
    } catch (error) {
        console.log('redis middleware failed')
        return res.sendStatus(400)
    }
}

module.exports = redis