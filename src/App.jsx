import React, {Component} from "react";
import "./app.css";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import sun from "./assets/icon-sun.svg"

class App extends Component {
  constructor() {
    super();
    this.state = {
      text : '',
      todos : [],
    };
  }


  

  inputHandler = (e) => {
    this.setState ({text : e.target.value})
  }


  inputSubmit = (e) => {
    if (e.key === 'Enter') {
      const newTask = {
        id : Math.random() * 1000,
        text : this.state.text,
        completed : false,
      }
      this.setState({ todos: [...this.state.todos, newTask]});
      this.setState({ text : ''});
    }
  };

  

  deleteTask = (toDoKey) => {
    // Filter the todos array to remove the task with a matching ID
    const updatedTodos = this.state.todos.filter(task => task.id !== toDoKey);
    
    this.setState({ todos: updatedTodos });
  }

  taskDone = (taskId) => {
    const updatedTodos = this.state.todos.map((item) => {
      if (item.id === taskId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    
    this.setState({ todos: updatedTodos });
  }
  

  clearList = () => {
    this.setState({todos : []})
  }

 

  

  

  render() {

    return (
      <div>
        <div className="h-[80px]">
          <img src="../src/assets/bg-desktop-dark.jpg" alt="" />
        </div>
        <div className=" flex justify-evenly items-center text-4xl font-bold p-8 pt-12 z-40">
         <h1 className="text-light-grayish-blue bg-transparent" >T O D O</h1>
         <img className='w-8 h-8 bg-transparent' src={sun} alt="" />
        </div>
        <Form onChange={this.inputHandler} onKeyPress={this.inputSubmit} input={this.state.text}/>
        <TodosList text={this.state.text} todos={this.state.todos} deleteTask={this.deleteTask} toggle={this.taskDone} length={this.state.todos.length} clear={this.clearList} completed={this.state.todos.completed}/>
      </div>
    )
  }
}


export default App;