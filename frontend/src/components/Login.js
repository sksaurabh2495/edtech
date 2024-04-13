import React, { useState } from 'react';
import axios from 'axios';
const { API_URL } = require('../constants.js');

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL + '/users/login', { email, password });
      console.log(res.data); // Assuming the server returns a JWT token upon successful login
      // You can redirect the user to another page or perform additional actions here
    } catch (err) {
      console.error(err.response); // Log any error response from the server
      // You can display an error message to the user or perform other error handling here
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
