const router = require('express').Router()
const controller = require('../controller/portfolio')
const authMiddleware = require('../middleware/auth')

router.get('/getPortfolios', [authMiddleware,], controller.getPortfolios)
router.post('/createPortfolios', [authMiddleware,], controller.createPortfolio)
router.post('/updatePortfolios', [authMiddleware,], controller.updatePortfolio)
router.post('/deletePortfolios', [authMiddleware,], controller.deletePortfolio)

module.exports = router