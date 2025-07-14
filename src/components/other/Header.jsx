import React from 'react'
import { useState } from 'react'

const Header = () => {

  // const [username, setUsername] = useState('')

  // if (!data) {
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    // Setting value of loggedInUser to empty
    localStorage.setItem('loggedInUser', '')
    // reloading the page
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-5 py-2 rounded-sm cursor-pointer'>Log Out</button>

    </div>
  )
}

export default Header
