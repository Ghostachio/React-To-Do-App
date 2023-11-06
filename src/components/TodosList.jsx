  import React from 'react'
  import Todo from "./Todo";
  import Status from './Status';

  const TodosList = ({todos, deleteTask, toggle, length, clear, }) => {

    return (

        
      <div className='text-center flex justify-center pt-7 '>
        <ul className='flex flex-col gap-2'>
          {todos.map((task, index) => {
            // console.log(task); // Add this console.log statement
            return (
              <Todo key={index} toDoKey={task.id} item={task.text} completed={task.completed} deleteTask={deleteTask} toggle={ () => toggle(task.id)}/>
            );
          })}
            <Status length={length} clear={clear}/>
        </ul>
      </div>
      
    );
  };

  export default TodosList