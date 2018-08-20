import UsersService from './UsersService';

export default class ActiveUsersService extends UsersService {
    constructor() {
        super("active")
    }
}
