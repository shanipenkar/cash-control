import React, { useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    fetch('http://localhost:5000/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
      console.log(data.status, data.message);
      console.log(data.status)
      if (data.status === 'Success:') {
        history.push('/cashflow');
      }

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      console.log('Error:', error.message);
    });
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          autoComplete="off"
          onChange={handleChange}
          name="username"
          value={user.username}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          autoComplete="off"
          onChange={handleChange}
          name="password"
          value={user.password}
        />
        <button type="submit" value="Submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
