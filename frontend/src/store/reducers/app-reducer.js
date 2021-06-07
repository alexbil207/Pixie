const initialState = {
    isPageView: false, 
    isEditMode: false
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return { ...state, isPageView: action.isPageView }

        case 'TOGGLE_EDIT_MODE':
            return {...state, isEditMode: action.mode}

        default:
            return state
    }
}
