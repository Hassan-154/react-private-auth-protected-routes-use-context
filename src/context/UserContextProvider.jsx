import React, { useState } from 'react'
import UserContext from './userContext'

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    console.log( 'user login details. ' , user)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider