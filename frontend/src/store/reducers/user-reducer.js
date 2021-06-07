const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    isLoading: false,
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return { ...state, user: action.user, isLoading: false };
        case 'LOGOUT_USER':
            return { user: null };
        case 'LOADING_USER':
            return { ...state, isLoading: action.isLoading }
        default:
            return state;
    }
}