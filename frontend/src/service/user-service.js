import { httpService } from './http-service'


export const userService = {
    getUser,
    signUp,
    logOut,
};


async function getUser(credentials) {
    try {
        const user = await httpService.post(`auth/login`, credentials);
        if (user) await localStorage.setItem('user', JSON.stringify(user));
        return user;
    } catch (err) {
        console.log(err)
        throw err
    }
};

async function logOut() {
    try {
        await httpService.post(`auth/logout`);
        localStorage.clear();
    } catch (err) {
        console.log(err)
        throw err
    }
};


async function signUp(userInfo) {
    try {
        const user = await httpService.post(`auth/signup`, userInfo);
        if (user) localStorage.setItem('user', JSON.stringify(user))
        return user
    } catch (err) {
        console.log(err)
        throw err
    }
};