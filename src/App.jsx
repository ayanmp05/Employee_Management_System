import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'

// 1:45:03 uptill

const App = () => {
  // User state handling
  const [user, setUser] = useState(null)

  // handleLogin setup and passing argument in email and password
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
    } else if (email == 'user@me.com' && password == '123') {
      setUser('employee')
    } else {
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {/* If user is not there then show the log in page */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
