import User from '../models/UserModel'
import ActiveUsersService from '../services/ActiveUsersService';
import RemovedUsersService from '../services/RemovedUsersService';

window.activeUsers = new ActiveUsersService();
window.removedUsers = new RemovedUsersService();

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

// ACTIONS

export function loginUser(login, pass) {
    if(window.activeUsers.hasUser(login, pass)) {
        let user = window.activeUsers.users[login];
        return {
            type: LOGIN_USER,
            payload: user
        };
    }
    return {
        type: LOGIN_USER,
        payload: {}
    }
}

export function registerUser(name, lastName, login, password) {
    if(!window.activeUsers.users[login]){
        let user = new User(name, lastName, login, password);
        window.activeUsers.addUser(user);
        return {
            type: REGISTER_USER,
            payload: user
        }
    }
    return {
        type: REGISTER_USER,
        payload: {}
    }
}

// REDUCERS

export function loginReducer (state = null, action) {
    switch(action.type) {
        case ('LOGIN_USER'):
            return {
                ...state,
                data: action.payload
            }
        default:
            return {...state}
    }
}
