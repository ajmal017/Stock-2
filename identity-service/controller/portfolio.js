const Portfolio = require('../model/portfolio')

exports.createPortfolio = async (req, res) => {
    try {
        const portfolio = new Portfolio({
            tickers: req.body.tickers,
            user: req.body.user
        })
        await portfolio.save()
        return res.sendStatus(201)
    } catch (error) {
        return res.status(500).json({ error: 'Server Error' })
    }
}

exports.updatePortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findById({ id: req.body._id })
        portfolio.tickers = req.body.tickers
        await portfolio.save()
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ error: 'Server Error' })
    }
}

exports.deletePortfolio = async (req, res) => {
    try {
        await Portfolio.findByIdAndRemove({ id: req.body._id })
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ error: 'Server Error' })
    }
}

exports.getPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find({ user: req.body.user })
        return res.sendStatus(200).json(portfolios)
    } catch (error) {
        return res.status(500).json({ error: 'Server Error' })
    }
}
