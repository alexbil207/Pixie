const logger = require('../services/logger.service')
const userService = require('../api/user/user.service')


async function uniqueEmail(req, res, next) {
    const { email } = req.body
    logger.debug(`trying to signup with email: ${email}`);
    const user = await userService.getUser(email);
    if (user) {
        logger.error(`cannot signup email already in use: ${email}`);
        res.status(401).end('cannot signup email already in use')
        return
    }
    next()
}



module.exports = {
    uniqueEmail
}
