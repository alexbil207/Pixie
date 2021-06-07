const initialState = {
    data: {
        childs: []
    }
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return { data: action.data };
        case 'EDIT_DATA':
            return { ...state, data: { ...state.data, childs: action.childs } }
        case 'ADD_SECTION':
            return { ...state, data: { ...state.data, childs: [...state.data.childs, action.child] } }
        default:
            return state;
    }
}