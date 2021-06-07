const templateService = require('./template.service')
const logger = require('../../services/logger.service')

async function getTemplates(req, res) {
    try {
        const templates = await templateService.query()
        res.send(templates)
    } catch (err) {
        logger.error('Cannot get templates', err)
        res.status(500).send({ err: 'Failed to get templates' })
    }
}
async function getTemplate(req, res) {
    try {
        const { templateId } = req.params;
        const template = await templateService.getTemplateById(templateId)
        res.send(template)
    } catch (err) {
        logger.error('Cannot get template', err)
        res.status(500).send({ err: 'Failed to get template' })
    }
}
async function saveTemplate(req, res) {
    try {
        const templateInfo = req.body;
        const template = await templateService.saveTemplate(templateInfo)
        res.send(template)
    } catch (err) {
        logger.error('Cannot save template', err)
        res.status(500).send({ err: 'Failed to save template' })
    }
}
async function removeTemplate(req, res) {
    try {
        const { templateId } = req.params;
        await templateService.remove(templateId)
        res.send(`${templateId} template was deleted`)
    } catch (err) {
        logger.error('Cannot remove template', err)
        res.status(500).send({ err: 'Failed to remove template' })
    }
}




module.exports = {
    getTemplates,
    getTemplate,
    saveTemplate,
    removeTemplate,

}