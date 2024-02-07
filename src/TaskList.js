import React, {useState, useEffect} from 'react'
import Task from './Task'

function TaskList(props){
    const [tasks, setTasks] = useState(props.tasklist)

    //each time props changes in the parent component and is passed here it will call useEffect
    useEffect(()=>{
        setTasks(props.tasklist)
    },[props.tasklist])

    return (
        <div>
            <h1>{tasks.length}</h1>
            {tasks.map((task) => (
                <Task key={task} task={task} />
            ))}
            
        </div>
    )
}

export default TaskList