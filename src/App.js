import React, { useEffect, useState } from 'react';
import UserService from './API/UserService';
import axios from 'axios';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  const [loggedData, setLoggedData] = useState(null);

  const [registerData, setRegisterData] = useState({
    login: "",
    password: "",
    email: ""
  })

  const [loginData, setLoginData] = useState({
    login: "",
    password: ""
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

  const handleLoginLoginChange = (e) => {
    const copy = { ...loginData }
    copy.login = e.target.value
    setLoginData(copy)
  }

  const handleLoginPasswordChange = (e) => {
    const copy = { ...loginData }
    copy.password = e.target.value
    setLoginData(copy)
  }

  const handleRegistration = () => {
    UserService.saveUser(registerData)
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


  useEffect(() => {
    UserService.getUsers().then(res => {
      setUsers(res.data)
    })
  }, [])

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegistration}>
        <input placeholder='login' onChange={(event) => {handleLoginChange(event)}} value={registerData.login}></input><br></br>
        <input placeholder='password' onChange={(event) => {handlePasswordChange(event)}} value={registerData.password}></input><br></br>
        <input placeholder='email' onChange={(event) => {handleEmailChange(event)}} value={registerData.email} ></input><br></br>
        <button type='submit'>Register</button>

      </form>

      <h1>Login</h1>
      <form onSubmit={event => handleLogin(event)}>
        <input placeholder='login' onChange={(event) => {handleLoginLoginChange(event)}} value={loginData.login}></input><br></br>
        <input placeholder='password' onChange={(event) => {handleLoginPasswordChange(event)}} value={loginData.password}></input><br></br>
        <button type='submit'>Login</button>
      </form>

      {loggedData ? (
        <p>Logged in as: {loggedData.login}</p>
      ) : (
        <p>Not logged in</p>
      )}

      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListComponent;
