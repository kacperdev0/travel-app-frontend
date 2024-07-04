import { useState, useEffect } from "react";
import UserService from "../API/UserService";

const LoginComponent = () => {
    const [loginData, setLoginData] = useState({
        login: "",
        password: ""
    })

    const [LoggedData, setLoggedData] = useState()

    const handleLoginChange = (e) => {
        const copy = { ...loginData }
        copy.login = e.target.value
        setLoginData(copy)
    }
    
    const handlePasswordChange = (e) => {
        const copy = { ...loginData }
        copy.password = e.target.value
        setLoginData(copy)
    }

    const handleLogin = (e) => {
        e.preventDefault()
    
        UserService.loginUser(loginData)
          .then(res => {
            setLoggedData(res.data);
          })
          .catch(error => {
            console.error('Login error:', error.response.data);
          });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={event => handleLogin(event)}>
                <input placeholder='login' onChange={(event) => {handleLoginChange(event)}} value={loginData.login}></input><br></br>
                <input placeholder='password' onChange={(event) => {handlePasswordChange(event)}} value={loginData.password}></input><br></br>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginComponent;