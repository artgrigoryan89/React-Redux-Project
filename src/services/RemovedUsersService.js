import UsersService from './UsersServiceFs';

export default class RemovedUsersService extends UsersService {
    constructor() {
        super("removed")
    }
}