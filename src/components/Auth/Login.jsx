import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  // useState for email,pass
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // event handler
  const submitHandler = (e) => {
    // Preventing default property of form
    e.preventDefault();
    //Setting email & password on submit to handleLogin
    handleLogin(email,password)
    // setting value of boxes to empty
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className="border-2 rounded-2xl border-emerald-600 p-15">
        <h1 className='text-white text-4xl font-semibold mb-8'>Welcome to EMS</h1>
        <form
          // Setting submit handler & passing e as event
          onSubmit={(e) => {
            submitHandler(e)
          }} className='flex flex-col items-center justify-center'>

          <input
            // Setting initial value of this box which can not be changeable until event push
            value={email}
            onChange={(e) => {
              // Adding event listener & setting the value to the email 
              setEmail(e.target.value)
            }}
            required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 placeholder:text-base mt-4' type="email" placeholder='Enter email' />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 placeholder:text-base mt-4' type="password" placeholder='Enter your password' />

          {/* <button className='text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white placeholder:text-base mt-6 cursor-pointer'>Log in</button> */}

          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 mt-6 ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Log in
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
