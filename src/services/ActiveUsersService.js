import UsersService from './UsersServiceFs';

export default class ActiveUsersService extends UsersService {
    constructor() {
        super("active")
    }

    /*hasUser(login, password) {
        let found = false;
        if ((login in this.users) && (this.users[login].pass == password)) {
            return found = true;
        }
    } */
}
