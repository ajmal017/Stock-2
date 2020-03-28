const getHistoricData = require('../utils/getHistoricData')
const dotenv = require('dotenv').config()
const axios = require('axios')
const { CALCULATOR_STOCK_HISTORY, CALCULATOR_STOCK_METRICS,
    CALCULATOR_PORTFOLIO_METRICS, CALCULATOR_EFFICIENT_FRONTIER, CALCULATOR_SERVICE,
    CALCULATOR_STOCK_DETAILS } = process.env


exports.stockMetrics = async (req, res) => {
    try {
        const { historicData, tickers } = req.body
        console.log('stockMetrics for', tickers)
        const stockMetrics = await
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_METRICS}`,
                { historicData }, { headers: req.headers })
        return res.status(200).json(stockMetrics.data)
    } catch (error) {
        console.log('/stockMetrics error')
        return res.sendStatus(400)
    }
}




exports.stockHistory = async (req, res) => {
    try {
        const { historicData, tickers } = req.body
        console.log('/stockHistory for', tickers)

        const history = await axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_HISTORY}`,
            { historicData }, { headers: req.headers })

        return res.status(200).json(history.data)
    } catch (error) {
        console.log('/stockHistory error')
        return res.sendStatus(400)
    }
}


exports.stockDetails = async (req, res) => {
    try {
        const { historicData, tickers } = req.body
        console.log('/stockDetails for', tickers)

        const stockDetails = await axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_DETAILS}`,
            { historicData }, { headers: req.headers })

        return res.status(200).json(stockDetails.data)
    } catch (error) {
        console.log('/stockDetails error')
        return res.sendStatus(400)
    }
}


exports.portfolioMetrics = async (req, res) => {
    try {
        const { historicData, tickers } = req.body
        console.log('/portfolioMetrics for', tickers)

        const portfolioMetrics = await axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_PORTFOLIO_METRICS}`,
            { historicData }, { headers: req.headers })

        return res.status(200).json(portfolioMetrics.data)
    } catch (error) {
        console.log('/portfolioMetrics error')
        return res.sendStatus(400)
    }
}

exports.efficientFrontier = async (req, res) => {
    try {
        const { historicData, tickers } = req.body
        console.log('/efficientFrontier for', tickers)

        const efficientFrontier = await axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_EFFICIENT_FRONTIER}`,
            { historicData }, { headers: req.headers })

        return res.status(200).json(efficientFrontier.data)
    } catch (error) {
        console.log('/effiencientFrontier error')
        return res.send({ error })
    }
}