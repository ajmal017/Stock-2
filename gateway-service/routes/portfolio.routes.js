const express = require('express')
const proxy = require('express-http-proxy')
const redis_new = require('../middleware/redis-new')
const marketIndex = require('../middleware/marketIndex')
const validateTickers = require('../middleware/validateTickers')

const { CALCULATOR_SERVICE, CALCULATOR_PORTFOLIO_ANALYSIS
} = process.env

const router = express.Router()

router.post('/portfolioAnalysis', [validateTickers, redis_new], proxy(`${CALCULATOR_SERVICE}${CALCULATOR_PORTFOLIO_ANALYSIS}`))


// router.get('/getPortfolios', [], proxy())
// router.post('/createPortfolios', [], proxy())
// router.post('/updatePortfolios', [], proxy())
// router.post('/deletePortfolios', [], proxy())


module.exports = router