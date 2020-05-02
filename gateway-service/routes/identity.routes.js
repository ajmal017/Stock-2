const express = require('express')
const router = express.Router()
const proxy = require('express-http-proxy')
const { IDENTITY_SERVICE } = process.env

router.post('/login', proxy(`${IDENTITY_SERVICE}/login`))
router.post('/register', proxy(`${IDENTITY_SERVICE}/register`))
router.get('/logout', proxy(`${IDENTITY_SERVICE}/logout`))
router.get('/getUser', proxy(`${IDENTITY_SERVICE}/getuser`))

module.exports = router