import React,{useState, useEffect} from 'react'
import TaskList from './TaskList'
import './App.css'


function App() {
  const [inputTask, setInputTask] = useState('')
  const [tasks, setTasks] = useState([])
  

  const handleChange = (e)=>{
    setInputTask(e.target.value)
    console.log("input changed")
  }
  const handleClick = ()=>{
    setTasks([inputTask, ...tasks])
    setInputTask('')
    console.log("button clicked")
  }

  
  
  return (
    <div id="app-container">
      <input id="input-task" type="text" onChange={handleChange} value={inputTask} />
      <button onClick={handleClick}>Add Task</button>
      <TaskList tasklist={tasks}/>
    </div>
    
  );
}

export default App;
