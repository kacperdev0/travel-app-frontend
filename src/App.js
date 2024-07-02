import React, { useEffect, useState } from 'react';
import UserService from './API/UserService';
import axios from 'axios';

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers().then(res => {
      setUsers(res.data)
    })
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListComponent;
