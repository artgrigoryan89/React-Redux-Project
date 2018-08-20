import User from '../models/UserModel'
import ActiveUsersService from '../services/ActiveUsersService';
import RemovedUsersService from '../services/RemovedUsersService';
import TokenService from '../services/TokenService';
import hash from 'object-hash';

const activeUsers = new ActiveUsersService();
const removedUsers = new RemovedUsersService();
const id = new TokenService();

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_PASSWORD = 'GET_PASSWORD';
export const ACTIVATE_USER = 'ACTIVATE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const GET_DATA = 'GET_DATA';

// ACTIONS

export function registerUser(name, lastName, login, pass, mail) {
    return (dispatch, getState) => {
        let password = hash(pass);
        let user = new User(name, lastName, login, password, mail);
        let data = JSON.stringify(user);
        fetch('http://localhost:3000/register', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json().then(function (data) {
                    const payload = data;
                    dispatch({type: REGISTER_USER, payload})

                });
            }
        ).catch(function (error) {
            console.log(error);
        })
    }
}

export function loginUser(login, pass) {
    return (dispatch, getState) => {
        let password = hash(pass);
        let data = JSON.stringify({login, password});
        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json().then(function (data) {
                    const payload = data.res;
                    id.setToken(data.token);
                    dispatch({type: LOGIN_USER, payload})

                });
            }
        ).catch(function (error) {
            console.log(error);
        })
    }
}

export function getPassword(login) {
    return (dispatch, getState) => {
        let data = JSON.stringify({login});
        fetch('http://localhost:3000/changePassword', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json().then(function (data) {
                    const payload = data.pass;
                    dispatch({type: GET_PASSWORD, payload})

                });
            }
        ).catch(function (error) {
            console.log(error);
        })
    }
}

export function getData(key) {
    return (dispatch, getState) => {
        let token = id.getToken();
        let data = JSON.stringify({key, token});
        fetch('http://localhost:3000/user/getData', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json().then(function (data) {
                    if (data == 'Error') {
                        this.props.history.push('/')
                    }
                    else {
                        const payload = data;
                        id.setToken(data.token);
                        dispatch({type: GET_DATA, payload})
                    }
                });
            }
        ).catch(function (error) {
            console.log(error);
        })
    }
}

export function activateUser(userLogin){
    activeUsers.addUser(userLogin);
    removedUsers.removeUser(userLogin);
}

export function removeUser(userLogin, key){
    if (key == 'active'){
        removedUsers.addUser(userLogin);
        activeUsers.removeUser(userLogin);
    }
    if (key == 'removed'){
        removedUsers.removeUser(userLogin);
    }
}


// REDUCERS

export function user(state = null, action) {
    switch (action.type) {
        case ('LOGIN_USER'):
            return {
                ...state,
                data: action.payload
            }
        case ('REGISTER_USER'):
            return {
                ...state,
                data: action.payload
            }
        case ('GET_DATA'):
            return {
                ...state,
                data: action.payload
            }
        case ('GET_PASSWORD'):
            return {
                ...state,
                data: action.payload
            }
        case('ACTIVATE_USER'):
            return {
                ...state,
                data: action.payload
            }
        case('REMOVE_USER'):
            return {
                ...state,
                data: action.payload
            }
        default:
            return {...state}
    }
}