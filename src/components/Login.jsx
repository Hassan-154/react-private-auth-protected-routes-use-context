import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const {  token , setToken } = useContext(UserContext);
  const navigate = useNavigate();


  const currentUserToken = 'eyJhbGciOiJIUzI1NiIsIn';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'abc123') {
      localStorage.setItem('userToken', currentUserToken);
      setToken(currentUserToken)
      navigate('/home');
    } else {
      setCheckPassword('Wrong password.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 border rounded mt-1"
              required
            />
          </label>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 border rounded mt-1"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <span className="text-red-500">{checkPassword}</span>
      </div>
    </div>
  );
}

export default Login;
