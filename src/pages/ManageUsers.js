import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleStatusChange = (userId, status) => {
    axios.patch(`/api/users/${userId}`, { status })
      .then(res => {
        const updatedUsers = users.map(user => {
          if (user._id === userId) {
            return { ...user, status };
          } else {
            return user;
          }
        });
        setUsers(updatedUsers);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <select onChange={(e) => handleStatusChange(user._id, e.target.value)}>
                  <option value="normal">Normal User</option>
                  <option value="moderator">Moderator</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
