const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')


async function query(creatorId) {
    const criteria = _buildCriteria(creatorId)

    try {
        const collection = await dbService.getCollection('web');
        var websites = await collection.find(criteria).toArray();
        return websites;
    } catch (err) {
        logger.error('cant find any websites', err);
        throw err;
    }
}

async function getWebById(webId) {
    try {
        const collection = await dbService.getCollection('web');
        const query = { _id: ObjectId(webId) };
        const website = await collection.findOne(query);

        return website;
    } catch (err) {
        logger.error(`while finding website ${webId}`, err);
        throw err;
    }
}

async function remove(webId) {
    try {
        const collection = await dbService.getCollection('web');
        const query = { _id: ObjectId(webId) };
        await collection.deleteOne(query);
        return 'Deleted';
    } catch (err) {
        logger.error(`cannot remove web ${webId}`, err);
        throw err;
    }
}


async function saveWeb(WebInfo) {
    const { _id } = WebInfo
    if (_id) {
        try {
            const collection = await dbService.getCollection('web');
            delete WebInfo._id;
            await collection.updateOne({ _id: ObjectId(_id) }, { $set: WebInfo });
            return WebInfo;
        } catch (err) {
            logger.error('cannot update web', err);
            throw err;
        }
    }
    try {
        const collection = await dbService.getCollection('web');
        const insertedWeb = await collection.insertOne({ ...WebInfo });
        return insertedWeb.ops[0];
    } catch (err) {
        logger.error('cannot insert web', err);
        throw err;
    }

}


function _buildCriteria(creatorId) {
    let criteria = {}
    criteria.$and = [{
        creatorId: creatorId
    }]
    return criteria
}





module.exports = {
    query,
    getWebById,
    remove,
    saveWeb,
}


