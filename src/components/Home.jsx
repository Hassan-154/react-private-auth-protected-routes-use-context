import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  function signOut() {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className='h-screen bg-gray-400 flex flex-col items-center justify-center'>
      <h1 className='text-4xl'>I am Home Page</h1>
      <Link to='/login' className='mt-4 bg-gray-600 p-3 text-lg text-white'>go back to login page.</Link>
      <button className='bg-gray-600 p-1.5' onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Home