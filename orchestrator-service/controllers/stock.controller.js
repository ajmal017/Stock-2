const getHistoricData = require('../utils/getHistoricData')
const dotenv = require('dotenv').config()
const axios = require('axios')
const { CALCULATOR_STOCK_HISTORY, CALCULATOR_STOCK_METRICS,
    CALCULATOR_PORTFOLIO_METRICS, CALCULATOR_EFFICIENT_FRONTIER, CALCULATOR_SERVICE,
    PRICER_SERVICE, CALCULATOR_STOCK_DETAILS } = process.env


exports.financialMetrics = async (req, res) => {
    try {
        const { tickers } = req.body
        console.log('financialMetrics for', tickers)
        const historicData = await getHistoricData(tickers)
        const index = await getHistoricData(['^GSPC'])
        const stockIndex = [...historicData, ...index]

        const [history, stockMetrics, portfolioMetrics, stockDetails] = await axios.all([
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_HISTORY}`, { historicData }, { headers: req.headers }),
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_METRICS}`, { historicData }, { headers: req.headers }),
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_PORTFOLIO_METRICS}`, { historicData }, { headers: req.headers }),
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_DETAILS}`, { historicData: stockIndex }, { headers: req.headers }),
        ])
        const data = { ...history.data, ...stockMetrics.data, ...portfolioMetrics.data, ...stockDetails.data, symbols: [...tickers] }
        return res.status(200).json(data)
    } catch (error) {
        console.log('error', error)
        return res.send({ error })
    }
}


exports.efficientFrontier = async (req, res) => {
    try {
        const { tickers } = req.body
        console.log('efficientFrontier for', tickers)

        const historicData = await getHistoricData(tickers)
        const efficientFrontier = await axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_EFFICIENT_FRONTIER}`, { historicData })
        const data = efficientFrontier.data
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.send({ error })
    }
}