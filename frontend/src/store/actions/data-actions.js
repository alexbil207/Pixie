export function setData({ data }) { // Action Creator
    return dispatch => {
        dispatch({ type: 'SET_DATA', data });
    }
}

export function addSection(child) { // Action Creator
    return dispatch => {
        dispatch({ type: 'ADD_SECTION', child });
    }
}

export function editData(childs) { // Action Creator
    return dispatch => {
        dispatch({ type: 'EDIT_DATA', childs });
    }
}

