export function pageViewMode(isPageView) {
    return async dispatch => {
        try {
            dispatch({ type: 'CHANGE_VIEW', isPageView })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export function isEditorMode(mode) {
    return async dispatch => {
        try {
            dispatch({ type: 'TOGGLE_EDIT_MODE', mode })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}
