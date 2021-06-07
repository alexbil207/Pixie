const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function getUser(email) {
    try {
        const collection = await dbService.getCollection('user')
        const query = { email: email }
        const user = await collection.findOne(query)
        return user;
    } catch (err) {
        logger.error(`cannot find user ${email}`, err)
        throw err
    }
}

async function updateUserLogin(userId) {
    try {
        const collection = await dbService.getCollection('user')
        await collection.updateOne({ _id: ObjectId(userId) }, { $set: { "lastLogInAt": Date.now() } });
        return
    } catch (err) {
        logger.error(`cannot update user login time ${userId}`, err)
        throw err
    }

}




module.exports = {
    getUser,
    updateUserLogin,
}