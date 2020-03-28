const removeDuplicates = (req, res, next) => {
    try {
        req.body.tickers = req.body.tickers.splice(0, req.body.tickers, ...(new Set(req.body.tickers)))
        next()
    } catch (error) {
        console.log('error in remove duplicates middleware')
    }
}