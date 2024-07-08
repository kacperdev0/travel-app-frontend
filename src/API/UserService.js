import axios from "axios";

const USER_API_URL= "http://localhost:8080/api"

class UserService {
    getUsers() {
        return axios.get(`${USER_API_URL}users/getAllUsers`)
    }

    saveUser(user) {
        return axios.post(`${USER_API_URL}/auth/register`, user)
    }

    loginUser(loginData) {
        return axios.post(`${USER_API_URL}/auth/login`, loginData);
    }
}

export default new UserService()