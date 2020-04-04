const marketIndex = (req, res, next) => {
    try {
        console.log('marketIndex middleware', req.body.tickers)
        const index = '^GSPC'
        req.body.tickers.push(index)
        console.log('marketIndex middleware', req.body.tickers)
        next()
    } catch (error) {
        console.log('marketIndex middleware failed')
        return res.sendStatus(400)
    }
}

module.exports = marketIndex