const express = require('express')
const stock = require('../controllers/stock.controller')

const router = express.Router()

router.post('', [], stock.financialMetrics)


module.exports = router