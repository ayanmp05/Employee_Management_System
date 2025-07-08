import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header></Header>
      <TaskListNumbers></TaskListNumbers>
      <TaskList></TaskList>
    </div>
  )
}

export default EmployeeDashboard
