const axios = require('axios')
const { PRICER_WORLD_TRADING, PRICER_SERVICE } = process.env

const redis = async (req, res, next) => {
    try {
        const { tickers } = req.body
        console.log('ticker for historica data in redis middleware')
        const result = []
        for (const ticker of tickers) {
            console.log('looping through ticker')
            res = await axios.post(`${PRICER_SERVICE}${PRICER_WORLD_TRADING}`, { ticker })
            result.push(res.data)
        }
        req.body.historicData = result
        next()
    } catch (error) {
        console.log('redis middleware failed', error)
        return res.sendStatus(400)
    }
}

module.exports = redis