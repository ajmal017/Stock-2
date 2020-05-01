const express = require('express')
const router = express.Router()
const controller = require('../controllers/identity.controller')

router.get('/google', [], controller.getGoogle)

module.exports = router