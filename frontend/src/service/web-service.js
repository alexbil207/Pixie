import { httpService } from './http-service'

// const STORAGE_KEY = 'web'

export const webService = {
    query,
    getById,
    save,
    remove,
}

async function query(creatorId) {
    try {
        const webSites = await httpService.get(`web?creatorId=${creatorId}`);
        return webSites;
    }
    catch (err) {
        console.log('cant find any websites', err)
        throw err
    }
}

async function getById(webId) {
    try {
        return await httpService.get(`web/${webId}`, webId);
    } catch (err) {
        console.log(`cant find website by id ${webId}`, err)
        throw err
    }
}


async function remove(webId) {
    try {
        return await httpService.delete(`web/${webId}`);
    } catch (err) {
        console.log(`cant remove website ${webId}`, err)
        throw err
    }
}


async function save(webInfo) {
    try {
        if (webInfo._id) return await httpService.put(`web`, webInfo);
        return await httpService.post(`web`, webInfo);
    } catch (err) {
        console.log(`cant save website`, err)
        throw err
    }
}




