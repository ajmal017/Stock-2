const historicData = require('../utils/getHistoricData')

const redis = async (req, res, next) => {
    try {
        const { tickers } = req.body
        console.log(req.body)
        console.log('tickers in redis middleware', tickers)
        req.body.historicData = await historicData(tickers)
        console.log('before next in redis middleware')
        next()

    } catch (error) {
        console.log('redis middleware failed', error)
        return res.sendStatus(400)
    }
}

module.exports = redis