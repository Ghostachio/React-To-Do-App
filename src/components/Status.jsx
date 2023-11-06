import React from 'react'

const Status = ({length, clear}) => {
  return (
        <div className='flex justify-center gap-11 text-dark-grayish-blue pt-4'>
          <p>{length} items left</p>
          <div className="all-status flex justify-center gap-5 text-dark-grayish-blue">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
          <p className='hover:cursor-pointer' onClick={clear}>Clear List</p>
        </div>
  )
}

export default Status