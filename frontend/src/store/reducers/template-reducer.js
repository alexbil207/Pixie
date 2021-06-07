const initialState = {
    templates: [],
    isLoading: false,
}

export function templateReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TEMPLATES':
            return { ...state, templates: action.templates, isLoading: false }
        case 'SAVE_TEMPLATE':
            return { ...state, templates: [...state.templates, action.savedTemplate], isLoading: false }
        case 'REMOVE_TEMPLATE':
            return { ...state, templates: state.templates.filter(template => template._id !== action.templateId) }
        case 'LOADING_TEMPLATE':
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}
