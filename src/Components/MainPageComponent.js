import React, { useState, useEffect } from 'react';
import UserService from '../API/UserService';

const UserList = () => {

    useEffect(() => {
      UserService.getUsers()
        .then(response => {
         console.log(response.data)
        })
        .catch(error => console.error('Error: ', error));
    }, []);
  
    return (
      <div>
        
      </div>
    );
};

export default UserList;
