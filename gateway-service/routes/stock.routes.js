const express = require('express')
const stock = require('../controllers/stock.controller')
const redis_new = require('../middleware/redis-new')
const marketIndex = require('../middleware/marketIndex')
const validateTickers = require('../middleware/validateTickers')
const router = express.Router()

router.post('/stockMetrics', [validateTickers, redis_new], stock.stockMetrics)
router.post('/stockHistory', [validateTickers, redis_new], stock.stockHistory)
router.post('/stockDetails', [validateTickers, marketIndex, redis_new], stock.stockDetails)
router.post('/portfolioMetrics', [validateTickers, redis_new], stock.portfolioMetrics)
router.post('/efficientFrontier', [validateTickers, redis_new], stock.efficientFrontier)
router.post('/stockOptions', [validateTickers, redis_new], stock.stockOptions)

module.exports = router