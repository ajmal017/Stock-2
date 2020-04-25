const marketIndex = (req, res, next) => {
    try {
        const index = '^GSPC'
        req.body.tickers.push(index)
        next()
    } catch (error) {
        console.log('marketIndex middleware failed')
        return res.sendStatus(500)
    }
}

module.exports = marketIndex