const express = require('express')
const { login, signup, logout } = require('./auth.controller')
const { uniqueEmail } = require('../../middlewares/uniqueEmail.middleware')


const router = express.Router()

router.post('/login', login)
router.post('/signup', uniqueEmail, signup)
router.post('/logout', logout)

module.exports = router