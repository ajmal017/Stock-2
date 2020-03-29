const express = require('express')
const stock = require('../controllers/stock.controller')
const redis = require('../middleware/redis')
const redis_new = require('../middleware/redis-new')
const marketIndex = require('../middleware/marketIndex')
const router = express.Router()

router.post('/stockMetrics', [redis], stock.stockMetrics)
router.post('/stockHistory', [redis_new], stock.stockHistory)
router.post('/stockDetails', [marketIndex, redis], stock.stockDetails)
router.post('/portfolioMetrics', [redis], stock.portfolioMetrics)
router.post('/efficientFrontier', [redis], stock.efficientFrontier)
router.post('/stockOptions', [redis], stock.stockOptions)

module.exports = router