const express = require('express')
const stock = require('../controllers/stock.controller')

const router = express.Router()

router.post('', [], stock.financialMetrics)

router.post('/efficientFrontier', [], stock.efficientFrontier)

module.exports = router