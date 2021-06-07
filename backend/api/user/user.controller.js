const userService = require('./user.service');
const logger = require('../../services/logger.service')


async function getUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userService.getUser(email, password)
        req.session.user = user;
        res.send(user)
    } catch (err) {
        logger.error('Cannot get user', err)
        res.status(403).send({ err: 'Failed to get user' })
    }
}



module.exports = {
    getUser,
}