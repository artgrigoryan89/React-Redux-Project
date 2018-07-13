import User from '../models/UserModel'
import ActiveUsersService from '../services/ActiveUsersService';
import RemovedUsersService from '../services/RemovedUsersService';

window.activeUsers = new ActiveUsersService();
window.removedUsers = new RemovedUsersService();

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const ACTIVE_USERS = 'ACTIVE_USERS';
export const REMOVED_USERS = 'REMOVED_USERS';
export const ACTIVATE_USER = 'ACTIVATE_USER';
export const REMOVE_USER = 'REMOVE_USER';

// ACTIONS

export function loginUser(login, pass) {
    if(window.activeUsers.hasUser(login, pass)) {
        let user = window.activeUsers.users[login];
        return {
            type: LOGIN_USER,
            payload: window.activeUsers.users
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

export function getActiveUsers() {
    let base = window.activeUsers;
    if(base.users){
        return {
            type: ACTIVE_USERS,
            payload: base
        }
    }
    return {
        type: ACTIVE_USERS,
        payload: {}
    }
}

export function getRemovedUsers() {
    let base = window.removedUsers;
    if(base.users){
        return {
            type: REMOVED_USERS,
            payload: base
        }
    }
    return {
        type: REMOVED_USERS,
        payload: {}
    }
}

export function activateUser(userLogin) {
    let user = window.removedUsers.users[userLogin];
    window.activeUsers.addUser(user);
    window.removedUsers.removeUser(userLogin);
    return {
        type: ACTIVATE_USER,
        payload: window.activeUsers
    }
}

export function removeUser(userLogin, key) {
    if(key == 'active') {
        user = window.activeUsers.users[userLogin];
        window.removedUsers.addUser(user);
        window.activeUsers.removeUser(userLogin);
        return {
            type: REMOVE_USER,
            payload: window.activeUsers
        }
    }
    if(key == 'removed') {
        user = window.removedUsers.users[userLogin];
        window.removedUsers.removeUser(userLogin);
        return {
            type: REMOVE_USER,
            payload: window.removedUsers
        }
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

export function adminReducer (state = null, action) {
    switch(action.type) {
        case ('ACTIVE_USERS'):
            return {
                ...state,
                data: action.payload
            }
        case('REMOVED_USERS'):
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