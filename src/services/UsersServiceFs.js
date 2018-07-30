export default class UsersService {
    constructor(key) {
        let me = this;
        this.key = key;
        this.getData(me);
    }

    getData(obj) {
        let users;
        fetch('http://localhost:3000')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
                    response.json().then(function (data) {
                        obj.users = data[obj.key];
                    });
                }
            )
    }

    addUser(user) {
        if (!(user.login in this.users)) {
            this.users[user.login] = user;
            let key = this.key;
            let data = JSON.stringify({user, key});
            fetch('http://localhost:3000/addUser', {
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

    removeUser(login) {
        delete this.users[login];
        let key = this.key;
        let data = JSON.stringify({login, key});
        fetch('http://localhost:3000/removeUser', {
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

