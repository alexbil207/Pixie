import { httpService } from './http-service'

const STORAGE_KEY = 'template'

export const templateService = {
    query,
    getById,
    save,
    remove,
}

async function query() {
    try {

        const templates = await httpService.get(`template`);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
        return templates;
    }
    catch (err) {
        console.log('cant find any templates', err)
        throw err
    }
}

async function getById(templateId) {
    try {
        return await httpService.get(`template/${templateId}`, templateId);
    } catch (err) {
        console.log(`cant find template by id ${templateId}`, err)
        throw err
    }
}


async function remove(templateId) {
    try {
        return await httpService.delete(`template/${templateId}`);
    } catch (err) {
        console.log(`cant remove template ${templateId}`, err)
        throw err
    }
}


async function save(templateInfo) {
    try {
        if (templateInfo._id) return await httpService.put(`template`, templateInfo);
        return await httpService.post(`template`, templateInfo);
    } catch (err) {
        console.log(`cant save template`, err)
        throw err
    }
}




