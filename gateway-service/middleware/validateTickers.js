const stocksDict = require('./stocks_dict.json')


const validateTickers = (req, res, next) => {
    try {
        const { tickers } = req.body
        for (const ticker of tickers) {
            if (!stocksDict[ticker]) return res.sendStatus(404)
        }
        next()
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }

}

module.exports = validateTickers