const express = require('express')
const router = express.Router()
const { getUser } = require('./user.controller')



//get logout
router.post('/:id', getUser)




module.exports = router



