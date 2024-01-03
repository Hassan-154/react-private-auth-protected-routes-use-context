import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userContext';

function Home() {

  const navigate = useNavigate();
  const { setToken } = useContext(UserContext)
  

  function signOut() {
    localStorage.clear()
    setToken('')
    navigate('/login')
  }

  return (
    <div className='h-screen bg-gray-400 flex flex-col items-center justify-center'>
      <h1 className='text-4xl'>I am Home Page</h1>
      <button className='bg-gray-600 p-2 text-white px-8 mt-6' onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Home