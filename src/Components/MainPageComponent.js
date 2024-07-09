import React, { useState, useEffect } from 'react';
import UserService from '../API/UserService';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      UserService.getUsers()
        .then(response => {
          setUsers(response.data); // Assuming your API returns data directly
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
        <h2>List of Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      </div>
    );
};

export default UserList;
