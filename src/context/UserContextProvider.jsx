import React, { useState, useEffect } from 'react';
import UserContext from './userContext';

const UserContextProvider = ({ children }) => {

  const [token, setToken] = useState('');
  
  useEffect(() => {
    const tokenFromLocal = localStorage.getItem('userToken');
    setToken(tokenFromLocal)
  }, [])
  
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
