const initialState = {
    webSites: [],
    web: {},
    isLoading: false,
}

export function webReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WEBS':
            return { ...state, webSites: action.webSites, isLoading: false }
        case 'SAVE_WEB':
            return { ...state, web: { ...action.savedWeb }, isLoading: false }
        case 'REMOVE_WEB':
            return { ...state, webSites: state.webSites.filter(web => web._id !== action.webId) }
        case 'LOADING_WEB':
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}
