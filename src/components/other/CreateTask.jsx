import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 ml-10 mr-10 rounded '>
        <form className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-2/5'>
            <div>
              <h3 className='text-base text-gray-300 mb-1 mt-2'>Task Title</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a UI design' />
            </div>
            <div>
              <h3 className='text-base text-gray-300 mb-1 mt-2'>Date</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
            </div>
            <div>
              <h3 className='text-base text-gray-300 mb-1 mt-2'>Asign to</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name' />
            </div>
            <div>
              <h3 className='text-base text-gray-300 mb-1 mt-2'>Category</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Design/dev/else' />
            </div>
          </div>

          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-base text-gray-300 mb-1 mt-2'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols='30' rows='10'></textarea>
            <button className='w-full mt-4 text-sm rounded px-5 hover:bg-emerald-600 py-3 bg-emerald-500'>Create Task</button>
          </div>

          
        </form>
      </div>
  )
}

export default CreateTask
