export default class UsersService {
    constructor(key) {
        this.key = key;
        this.users = {};
    }

    addUser(login) {
            let key = this.key;
            let data = JSON.stringify({login, key});
            fetch('http://localhost:3000/user/addUser', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (data) {
                console.log(data)
            }).catch(function (error) {
                    console.log(error);
                }
            );
        }

    removeUser(login) {
        let key = this.key;
        let data = JSON.stringify({login, key});
        fetch('http://localhost:3000/user/removeUser', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (data) {
            console.log(data)
        }).catch(function (error) {
                console.log(error);
            }
        );
    }
}

