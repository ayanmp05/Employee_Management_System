import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

// Taking data as props and passing it through everywhere
const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data = {data}></Header>
      <TaskListNumbers data = {data}></TaskListNumbers>
      <TaskList data = {data}></TaskList>
    </div>
  )
}

export default EmployeeDashboard
