const express = require('express')
const router = express.Router()
const { getWebs, getWeb, saveWeb, removeWeb } = require('./web.controller')


//get webs
router.get('/', getWebs);
//get web
router.get('/:webId', getWeb)
//create
router.post('/', saveWeb)
//update
router.put('/', saveWeb)
//delete
router.delete('/:webId', removeWeb)


module.exports = router


