import User from '../models/UserModel'
import ActiveUsersService from '../services/ActiveUsersService';
import RemovedUsersService from '../services/RemovedUsersService';

const activeUsers = new ActiveUsersService();
const removedUsers = new RemovedUsersService();

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const ACTIVE_USERS = 'ACTIVE_USERS';
export const REMOVED_USERS = 'REMOVED_USERS';
export const ACTIVATE_USER = 'ACTIVATE_USER';
export const REMOVE_USER = 'REMOVE_USER';

// ACTIONS

/*function loginFetch(user) {
      fetch('http://localhost:3000/login', {
            method: 'POST',
            body: user,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
            }).catch(function (error) {
            console.log(error);
        })

};

export function loginUser(login, pass) {
    let data = JSON.stringify({login, pass});
    let fetchResult = loginFetch(data);
    console.log(fetchResult);
    if (fetchResult.res) {
        return {
            type: LOGIN_USER,
            payload: data.data,
        }
    }
    else {
        return {
            type: LOGIN_USER,
            payload: {},
        }
    }
}
*/
export function loginUser(login, pass) {
    return (dispatch, getState) => {
        let data = JSON.stringify({login, pass});
        fetch('http://localhost:3000/login', {
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
                console.log('resp', response)
                return response.json().then(function (data) {
                    const payload = data.res ? data.data : {}
                    dispatch({type: LOGIN_USER, payload})

                });
            }
        ).catch(function (error) {
            console.log(error);
        })
    }
}

/*if(activeUsers.hasUser(login, pass)) {
    let user = activeUsers.users[login];
    return {
        type: LOGIN_USER,
        payload: activeUsers
    };
}
return {
    type: LOGIN_USER,
    payload: {}
} */

export function registerUser(name, lastName, login, password) {
    if (!activeUsers.users[login]) {
        let user = new User(name, lastName, login, password);
        activeUsers.addUser(user);
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
    let base = activeUsers;
    if (base.users) {
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
    let base = removedUsers;
    if (base.users) {
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
    let user = removedUsers.users[userLogin];
    activeUsers.addUser(user);
    removedUsers.removeUser(userLogin);
    return {
        type: ACTIVATE_USER,
        payload: activeUsers
    }
}

export function removeUser(userLogin, key) {
    if (key == 'active') {
        let user = activeUsers.users[userLogin];
        removedUsers.addUser(user);
        activeUsers.removeUser(userLogin);
        return {
            type: REMOVE_USER,
            payload: activeUsers
        }
    }
    if (key == 'removed') {
        let user = removedUsers.users[userLogin];
        removedUsers.removeUser(userLogin);
        return {
            type: REMOVE_USER,
            payload: removedUsers
        }
    }
}

// REDUCERS

export function loginReducer(state = null, action) {
    switch (action.type) {
        case ('LOGIN_USER'):
            return {
                ...state,
                data: action.payload
            }
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