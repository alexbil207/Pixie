import { templateService } from '../../service/template-service'

export function loadTemplates() { // Action Creator
    return async dispatch => {
        dispatch({ type: 'LOADING_TEMPLATE', isLoading: true })
        const templates = await templateService.query()
        const action = {
            type: 'SET_TEMPLATES',
            templates
        }
        dispatch(action)

    }
}
export function removeTemplate(templateId) { // Action Creator
    return async dispatch => {
        await templateService.remove(templateId)
        const action = {
            type: 'REMOVE_TEMPLATE',
            templateId
        }
        dispatch(action)
    }
}

export function saveTemplate(templateInfo) { // Action Creator
    return async dispatch => {
        dispatch({ type: 'LOADING_TEMPLATE', isLoading: true })
        const savedTemplate = await templateService.save(templateInfo)
        const action = {
            type: 'SAVE_TEMPLATE',
            savedTemplate
        }
        dispatch(action)

    }
}