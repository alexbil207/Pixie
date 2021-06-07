const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')


async function query() {
    try {
        const collection = await dbService.getCollection('template')
        var templates = await collection.find().toArray()
        return templates
    } catch (err) {
        logger.error('cant find any templates', err)
        throw err
    }
}

async function getTemplateById(templateId) {
    try {
        const collection = await dbService.getCollection('template')
        const query = { _id: ObjectId(templateId) }

        const template = await collection.findOne(query)
        return template
    } catch (err) {
        logger.error(`while finding template ${templateId}`, err)
        throw err
    }
}

async function remove(templateId) {
    try {
        const collection = await dbService.getCollection('template')
        const query = { _id: ObjectId(templateId) }
        await collection.deleteOne(query)
        return 'Deleted'
    } catch (err) {
        logger.error(`cannot remove template ${templateId}`, err)
        throw err
    }
}


async function saveTemplate(templateInfo) {
    const { _id } = templateInfo
    if (_id) {
        try {
            const collection = await dbService.getCollection('template');
            delete templateInfo._id
            await collection.updateOne({ _id: ObjectId(_id) }, { $set: templateInfo });
            return templateInfo;

        } catch (err) {
            logger.error('cannot update template', err);
            throw err;
        }
    }
    try {
        const collection = await dbService.getCollection('template');
        await collection.insertOne({ ...templateInfo });
        return templateInfo;
    } catch (err) {
        logger.error('cannot insert template', err);
        throw err;
    }

}



module.exports = {
    query,
    getTemplateById,
    remove,
    saveTemplate,
}


