const getHistoricData = require('../utils/getHistoricData')
const dotenv = require('dotenv').config()

const { CALCULATOR_STOCK_HISTORY, CALCULATOR_STOCK_METRICS,
    CALCULATOR_PORTFOLIO_METRICS } = process.env

const requestMaker = require('../utils/requestMaker')

const axios = require('axios')


exports.financialMetrics = async (req, res) => {
    try {
        const { tickers } = req.body
        const historicData = await getHistoricData(tickers)
        const [history, stockMetrics, portfolioMetrics] = await axios.all([
            axios.post(CALCULATOR_STOCK_HISTORY, { historicData }),
            axios.post(CALCULATOR_STOCK_METRICS, { historicData }),
            axios.post(CALCULATOR_PORTFOLIO_METRICS, { historicData })
        ])

        // const response = await axios.all([
        //     axios.post(CALCULATOR_STOCK_HISTORY, { historicData })])
        // console.log('response status', response.response.status)

        const data = { ...history.data, ...stockMetrics.data, ...portfolioMetrics.data, symbols: [...tickers] }
        console.log(data.tickers)
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.send({ error })
    }
}