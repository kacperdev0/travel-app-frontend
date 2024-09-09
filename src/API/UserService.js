import axios from "axios";

const USER_API_URL = "http://localhost:8080/api";

class UserService {

    getUsers() {
        return axios.get(`${USER_API_URL}/protected/userDetails`, {
            withCredentials: true
        });
    }

    saveUser(user) {
        return axios.post(`${USER_API_URL}/auth/register`, user);
    }

    loginUser(loginData) {
        return axios.post(`${USER_API_URL}/auth/login`, loginData, {
            withCredentials: true
        })
    }
    
    updateAvatarUrl(newUrl) {
        return axios.post(`${USER_API_URL}/protected/avatarUrl`, newUrl, {
            withCredentials: true
        })
    }
}

export default new UserService();
