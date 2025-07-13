import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    // Setting up task list by mapping
    <div id='tasklist' className='h-[40%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptTask key={idx}/>
        }
        if (e.newTask) {
          return <NewTask key={idx}/>
        }
        if (e.completed) {
          return <CompleteTask key={idx}/>
        }
        if (e.failed) {
          return <FailedTask key={idx}/>
        }
      })}

    </div>
  )
}

export default TaskList
