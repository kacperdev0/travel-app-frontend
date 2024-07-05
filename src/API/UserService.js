import axios from "axios";

const USER_API_URL= "http://localhost:8080/api/users"

class UserService {
    getUsers() {
        return axios.get(`${USER_API_URL}/getAllUsers`)
    }

    saveUser(user) {
        return axios.post(`${USER_API_URL}/public/register`, user)
    }

    loginUser(loginData) {
        return axios.post(`${USER_API_URL}/public/login`, loginData);
    }
}

export default new UserService()