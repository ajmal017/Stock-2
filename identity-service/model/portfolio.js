const mongoose = require('mongoose')

const PortfolioSchema = new mongoose.Schema({
    tickers: [],
    user: { type: String, required: true }
}, { timestamps: true })


module.exports = mongoose.model('portfolio', PortfolioSchema)