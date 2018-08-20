export default class TokenService {
    constructor() {
        this.token = '';
    }

    setToken(token) {
        localStorage.setItem('token', token);
    }

    getToken(){
        let token = localStorage.getItem('token');
        return token;
    }
}