import { useState, useEffect } from "react";
import UserService from "../API/UserService";

const RegisterComponent = () => {
    const [registerData, setRegisterData] = useState({
        login: "",
        password: "",
        email: ""
      })
    
    const handleLoginChange = (e) => {
        const copy = { ...registerData }
        copy.login = e.target.value
        setRegisterData(copy)
    }

    const handlePasswordChange = (e) => {
        const copy = { ...registerData }
        copy.password = e.target.value
        setRegisterData(copy)
    }

    const handleEmailChange = (e) => {
        const copy = { ...registerData }
        copy.email = e.target.value
        setRegisterData(copy)
    }

    const handleRegistration = () => {
        UserService.saveUser(registerData)
      }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegistration}>
                <input placeholder='login' onChange={(event) => {handleLoginChange(event)}} value={registerData.login}></input><br></br>
                <input placeholder='password' onChange={(event) => {handlePasswordChange(event)}} value={registerData.password}></input><br></br>
                <input placeholder='email' onChange={(event) => {handleEmailChange(event)}} value={registerData.email} ></input><br></br>
                <button type='submit'>Register</button>

            </form>
        </div>
    )
}

export default RegisterComponent;