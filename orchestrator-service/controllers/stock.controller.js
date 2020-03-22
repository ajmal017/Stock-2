const getHistoricData = require('../utils/getHistoricData')
const dotenv = require('dotenv').config()
const axios = require('axios')
const { CALCULATOR_STOCK_HISTORY, CALCULATOR_STOCK_METRICS,
    CALCULATOR_PORTFOLIO_METRICS, CALCULATOR_EFFICIENT_FRONTIER, CALCULATOR_SERVICE, PRICER_SERVICE } = process.env


exports.financialMetrics = async (req, res) => {
    try {
        const { tickers } = req.body
        console.log(tickers, 'before get historic data')
        const historicData = await getHistoricData(tickers)
        console.log('historic data done in metrics')
        const [history, stockMetrics, portfolioMetrics] = await axios.all([
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_HISTORY}`, { historicData }),
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_METRICS}`, { historicData }),
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_PORTFOLIO_METRICS}`, { historicData }),
        ])
        console.log('metrics done')
        const data = { ...history.data, ...stockMetrics.data, ...portfolioMetrics.data, symbols: [...tickers] }
        return res.status(200).json(data)
    } catch (error) {
        console.log(error.data)
        return res.send({ error })
    }
}


exports.efficientFrontier = async (req, res) => {
    try {
        const { tickers } = req.body
        const historicData = await getHistoricData(tickers)
        console.log('historic data done in effiecient frontier')
        const efficientFrontier = await axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_EFFICIENT_FRONTIER}`, { historicData })
        const data = efficientFrontier.data
        console.log('efficient frontier done')
        return res.status(200).json(data)
    } catch (error) {
        // console.log(error)
        return res.send({ error })
    }
}