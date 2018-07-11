import UsersService from './UsersService';

export default class RemovedUsersService extends UsersService {
    constructor() {
        super("removed")
    }
}