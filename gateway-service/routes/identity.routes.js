const express = require('express')
const router = express.Router()
const proxy = require('express-http-proxy')
const { IDENTITY_SERVICE } = process.env
const { check, body } = require('express-validator');
const validator = require('../middleware/validateInput')

router.post('/login', [[
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 }).trim()
], validator], proxy(`${IDENTITY_SERVICE}/login`))

router.post('/register', [[
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 }).trim(),
    check('password2').isLength({ min: 6 }).trim(),
    body('password2').custom((value, { req }) => {
        if (value !== req.body.password) throw new Error('Password confirmation does not match password');
        return true
    })
], validator], proxy(`${IDENTITY_SERVICE}/register`))

router.get('/logout', [], proxy(`${IDENTITY_SERVICE}/logout`))

router.get('/getUser', [], proxy(`${IDENTITY_SERVICE}/getuser`))

module.exports = router