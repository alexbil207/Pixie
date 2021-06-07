import { webService } from '../../service/web-service'

export function loadWebs(creatorId, isPublished) { // Action Creator
    return async dispatch => {
        dispatch({ type: 'LOADING_WEB', isLoading: true })
        const webSites = await webService.query(creatorId, isPublished)
        const action = {
            type: 'SET_WEBS',
            webSites
        }
        dispatch(action)

    }
}
export function removeWeb(webId) { // Action Creator
    return async dispatch => {
        await webService.remove(webId)
        const action = {
            type: 'REMOVE_WEB',
            webId
        }
        dispatch(action)
    }
}

export function saveWeb(webInfo) { // Action Creator
    return async dispatch => {
        dispatch({ type: 'LOADING_WEB', isLoading: true })
        const savedWeb = await webService.save(webInfo)
        const action = {
            type: 'SAVE_WEB',
            savedWeb
        }
        dispatch(action)
        return savedWeb

    }
}