const express = require('express')
const controller = require('../controllers/stock.controller')
const redis_new = require('../middleware/redis-new')
const marketIndex = require('../middleware/marketIndex')
const validateTickers = require('../middleware/validateTickers')
const router = express.Router()
const proxy = require('express-http-proxy')

const { CALCULATOR_STOCK_HISTORY, CALCULATOR_STOCK_METRICS,
    CALCULATOR_PORTFOLIO_METRICS, CALCULATOR_EFFICIENT_FRONTIER, CALCULATOR_SERVICE,
    CALCULATOR_STOCK_DETAILS, CALCULATOR_STOCK_OPTIONS } = process.env





router.post('/stockMetrics', [validateTickers, redis_new], proxy(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_METRICS}`))
router.post('/stockHistory', [validateTickers, redis_new], controller.stockHistory)
router.post('/stockDetails', [validateTickers, marketIndex, redis_new], proxy(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_DETAILS}`))
router.post('/portfolioMetrics', [validateTickers, redis_new], proxy(`${CALCULATOR_SERVICE}${CALCULATOR_PORTFOLIO_METRICS}`))
router.post('/efficientFrontier', [validateTickers, redis_new], proxy(`${CALCULATOR_SERVICE}${CALCULATOR_EFFICIENT_FRONTIER}`))
router.post('/stockOptions', [validateTickers, redis_new], proxy(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_OPTIONS}`))

module.exports = router