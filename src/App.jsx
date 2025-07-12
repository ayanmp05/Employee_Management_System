import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  // User state handling
  const [user, setUser] = useState(null)
  // Using AuthContext to retrieve data
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  
  // handleLogin setup and passing argument in email and password
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      // Setting user role in admin
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authData && authData.employees.find((e) => e.email == email && e.password == password)) {
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
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
