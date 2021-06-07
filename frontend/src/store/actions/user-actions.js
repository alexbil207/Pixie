import { userService } from '../../service/user-service';

export function loadUser(credentials) {
    return async dispatch => {
        dispatch({ type: 'LOADING_USER', isLoading: true })
        try {
            const user = await userService.getUser(credentials)
            dispatch({ type: 'LOGIN_USER', user })
        } catch (err) {
            dispatch({ type: 'LOADING_USER', isLoading: false })
            console.log(err)
            throw err
        }
    }
}

export function logOut() {
    return async dispatch => {
        try {
            await userService.logOut()
            const user = { user: '' }
            dispatch({ type: `LOGOUT_USER`, user })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}



export function signUp(userInfo) {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_USER', isLoading: true })
            const user = await userService.signUp(userInfo)
            dispatch({ type: `LOGIN_USER`, user })
        } catch (err) {
            dispatch({ type: 'LOADING_USER', isLoading: false })
            console.log(err)
            throw err
        }

    }
}