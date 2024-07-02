import axios from "axios";

const USER_API_URL= "http://localhost:8080/api/users"

class UserService {
    getUsers() {
        return axios.get(USER_API_URL)
    }

    saveUser(user) {
        return axios.post(USER_API_URL, user)
    }
}

export default new UserService()