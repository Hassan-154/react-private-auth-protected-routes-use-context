import React, { useContext } from 'react';
import UserContext from '../context/userContext';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-500 fixed top-0 left-0 p-4 w-full bg-opacity-75 flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">User Login Details:</h3>
        {user ? (
          <div className="mt-2">
            <p className="text-sm">Email: {user.email}</p>
            <p className="text-sm">Password: {user.password}</p>
          </div>
        ) : (
          <p className="text-sm">User not logged in</p>
        )}
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default Profile;
