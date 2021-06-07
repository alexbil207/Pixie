const webService = require('./web.service')
const logger = require('../../services/logger.service')

async function getWebs(req, res) {
    const { creatorId } = req.query
    try {
        const websites = await webService.query(creatorId)
        res.send(websites)
    } catch (err) {
        logger.error('Cannot get websites', err)
        res.status(500).send({ err: 'Failed to get websites' })
    }
}
async function getWeb(req, res) {
    try {
        const { webId } = req.params;
        const website = await webService.getWebById(webId)
        res.send(website)
    } catch (err) {
        logger.error('Cannot get website', err)
        res.status(500).send({ err: 'Failed to get website' })
    }
}
async function saveWeb(req, res) {
    try {
        const webInfo = req.body;
        const website = await webService.saveWeb(webInfo)
        res.send(website)
    } catch (err) {
        logger.error('Cannot save website', err)
        res.status(500).send({ err: 'Failed to save website' })
    }
}
async function removeWeb(req, res) {
    try {
        const { webId } = req.params;
        await webService.remove(webId)
        res.send(`${webId} website was deleted`)
    } catch (err) {
        logger.error('Cannot remove web', err)
        res.status(500).send({ err: 'Failed to remove web' })
    }
}




module.exports = {
    getWebs,
    getWeb,
    saveWeb,
    removeWeb,

}