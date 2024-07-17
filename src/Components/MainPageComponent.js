import React, { useState, useEffect } from 'react';
import UserService from '../API/UserService';
import { useNavigate } from 'react-router-dom';

const UserList = () => {

    const navigate = useNavigate()

    useEffect(() => {
      UserService.getUsers()
        .then(response => {
         console.log(response.data)
        })
        .catch(error => {
          console.error(error.response.status)
          if (error.response.status === 401) {
              navigate("/login", {state: { message: "Your session expired"}})
          }
        });
    }, []);
  
    return (
      <div>
        
      </div>
    );
};

export default UserList;
