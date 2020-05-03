const stocksDict = require('./stocks_dict.json')


const validateTickers = (req, res, next) => {
    try {
        const { tickers } = req.body
        for (const ticker of tickers) {
            if (!stocksDict[ticker]) return res.status(404).json({ error: ['Company not found'] })
        }
        next()
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }

}

module.exports = validateTickers