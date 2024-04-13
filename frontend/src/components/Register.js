import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/register', { name, email, password });
      console.log(res.data); // Assuming the server returns a success message upon successful registration
      // You can redirect the user to another page or perform additional actions here
    } catch (err) {
      console.error(err.response.data); // Log any error response from the server
      // You can display an error message to the user or perform other error handling here
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
