const express = require('express')
const router = express.Router()
const { getTemplates, getTemplate, saveTemplate, removeTemplate } = require('./template.controller')


//get webs
router.get('/', getTemplates);
//get web
router.get('/:templateId', getTemplate)
//create
router.post('/', saveTemplate)
//update
router.put('/', saveTemplate)
//delete
router.delete('/:templateId', removeTemplate)


module.exports = router


