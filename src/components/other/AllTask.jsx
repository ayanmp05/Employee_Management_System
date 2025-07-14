import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)
  console.log(authData)
  return (
    <div id='list' className='bg-[#1c1c1c] p-5 mr-10 ml-10 rounded mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 text-center text-lg font-medium'>Employee Name</h2>
          <h3 className='w-1/5 text-center text-lg font-medium'>New Task</h3>
          <h5 className='w-1/5 text-center text-lg font-medium'>Active Task</h5>
          <h5 className='w-1/5 text-center text-lg font-medium'>Completed</h5>
          <h5 className='w-1/5 text-center text-lg font-medium'>Failed</h5>
        </div>
      <div className='overflow-auto'>
        {authData.employees.map((e) => {
        return <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 text-center text-lg font-medium'>{e.firstName}</h2>
          <h3 className='w-1/5 text-center text-lg font-medium'>{e.taskCounts.newTask}</h3>
          <h5 className='w-1/5 text-center text-lg font-medium'>{e.taskCounts.active}</h5>
          <h5 className='w-1/5 text-center text-lg font-medium'>{e.taskCounts.completed}</h5>
          <h5 className='w-1/5 text-center text-lg font-medium'>{e.taskCounts.failed}</h5>
        </div>
      })}
      </div>
    </div>
  )
}

export default AllTask
