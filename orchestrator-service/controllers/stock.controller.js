const getHistoricData = require('../utils/getHistoricData')
const dotenv = require('dotenv').config()
const axios = require('axios')
const { CALCULATOR_STOCK_HISTORY, CALCULATOR_STOCK_METRICS,
    CALCULATOR_PORTFOLIO_METRICS, CALCULATOR_EFFICIENT_FRONTIER, CALCULATOR_SERVICE,
    CALCULATOR_STOCK_DETAILS, CALCULATOR_STOCK_OPTIONS } = process.env


exports.stockMetrics = async (req, res) => {
    await requester(req, res, CALCULATOR_SERVICE, CALCULATOR_STOCK_METRICS)
}


exports.stockHistory = async (req, res) => {
    await requester(req, res, CALCULATOR_SERVICE, CALCULATOR_STOCK_HISTORY)
}

exports.stockDetails = async (req, res) => {
    await requester(req, res, CALCULATOR_SERVICE, CALCULATOR_STOCK_DETAILS)
}

exports.portfolioMetrics = async (req, res) => {
    await requester(req, res, CALCULATOR_SERVICE, CALCULATOR_PORTFOLIO_METRICS)
}

exports.efficientFrontier = async (req, res) => {
    await requester(req, res, CALCULATOR_SERVICE, CALCULATOR_EFFICIENT_FRONTIER)
}

exports.stockOptions = async (req, res) => {
    await requester(req, res, CALCULATOR_SERVICE, CALCULATOR_STOCK_OPTIONS)
}


const requester = async (req, res, URL, API) => {
    try {
        const { historicData, tickers } = req.body
        console.log(URL, API, 'for', tickers)

        const data = await axios.post(`${URL}${API}`,
            { historicData }, { headers: req.headers })

        return res.status(200).json(data.data)
    } catch (error) {
        console.log(URL, API, 'failed')
        return res.send({ error })
    }
}