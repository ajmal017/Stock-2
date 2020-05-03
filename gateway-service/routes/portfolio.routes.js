const express = require('express')
const proxy = require('express-http-proxy')

const router = express.Router()

router.get('/getPortfolios', [], proxy())
router.post('/createPortfolios', [], proxy())
router.post('/updatePortfolios', [], proxy())
router.post('/deletePortfolios', [], proxy())


module.exports = router