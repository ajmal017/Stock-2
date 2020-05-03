const getHistoricData = require('../utils/getHistoricData')
const dotenv = require('dotenv').config()
const axios = require('axios')
const { CALCULATOR_STOCK_HISTORY, CALCULATOR_SERVICE } = process.env



exports.stockHistory = async (req, res) => {
    console.log('sending request to stockHistory')
    await requester(req, res, CALCULATOR_SERVICE, CALCULATOR_STOCK_HISTORY)
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