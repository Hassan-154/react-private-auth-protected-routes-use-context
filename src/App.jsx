import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log( 'is login from app component. ' , isLoggedIn)
  return (
    <UserContextProvider>
      <Profile />
      <Router>
        <Routes>
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
