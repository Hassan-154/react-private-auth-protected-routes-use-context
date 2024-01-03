import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Routing from './components/Routing';

function App() {

  return (
    <UserContextProvider>
       <Routing/>
    </UserContextProvider>
  );
}

export default App;
