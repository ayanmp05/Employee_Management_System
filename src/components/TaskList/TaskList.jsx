import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      <AcceptTask></AcceptTask>
      <NewTask></NewTask>
      <CompleteTask></CompleteTask>
      <FailedTask></FailedTask>
      
    </div>
  )
}

export default TaskList
