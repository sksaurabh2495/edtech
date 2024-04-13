// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

const App = () => {
  // Simulate authentication state
  const isAuthenticated = true; // Set to true if user is authenticated

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={() => <Home />} />
      </Routes>
    </Router>
  );
};

export default App;
