const express = require('express')
const stock = require('../controllers/stock.controller')
const redis = require('../middleware/redis')
const redis_new = require('../middleware/redis-new')
const marketIndex = require('../middleware/marketIndex')
const router = express.Router()

router.post('/stockMetrics', [redis_new], stock.stockMetrics)
router.post('/stockHistory', [redis_new], stock.stockHistory)
router.post('/stockDetails', [marketIndex, redis_new], stock.stockDetails)
router.post('/portfolioMetrics', [redis_new], stock.portfolioMetrics)
router.post('/efficientFrontier', [redis_new], stock.efficientFrontier)
router.post('/stockOptions', [redis_new], stock.stockOptions)

module.exports = router