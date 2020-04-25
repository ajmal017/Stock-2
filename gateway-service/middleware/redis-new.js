const historicData = require('../utils/getHistoricData')

const redis = async (req, res, next) => {
    try {
        const { tickers } = req.body
        req.body.historicData = await historicData(tickers)
        next()

    } catch (error) {
        console.log('redis middleware failed', error)
        return res.sendStatus(400)
    }
}

module.exports = redis