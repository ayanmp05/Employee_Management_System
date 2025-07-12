import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { getLocalStorage } from '../Utils/localStorage'
//Creating context
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // Calling useState for data
  const [userData, setUserData] = useState(null)
  // Passing the data
  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])


  return (
    <div>
      {/* Wrapping with AuthContext */}
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
