import React from 'react';
import Check from '../assets/icon-check.svg';
import Cross from '../assets/icon-cross.svg';

const Todo = ({toDoKey, item, deleteTask, toggle, completed}) => {

  const deleteTodo = () => {
    deleteTask(toDoKey)
  }

  
  

  return (
    <div className='flex items-center justify-between bg-very-dark-desaturated-blue border-white text-light-grayish-blue p-3 w-[600px] h-[60px] text-2xl'>
        <img onClick={toggle} src={Check} alt="" className={`w-7 p-2 rounded-2xl transition-transform hover:scale-150 cursor-pointer ${completed ? 'done': ''} `}/>
        <li className={`bg-very-dark-desaturated-blue border-white text-light-grayish-blue pt-4 w-[500px] h-[60px] text-2xl text-left pl-10 ${completed ? 'lined': ''} bg-`}>{item}</li>
        <img onClick={deleteTodo} src={Cross} alt=""className='w-7 p-2 rounded-xl transition-transform hover:scale-150 cursor-pointer ' />
      </div>
  )
}

export default Todo