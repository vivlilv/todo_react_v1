import React, {useState} from 'react'

function Task(props){
    const [task, setTask] = useState(props.task)

    return (
        <div>
            <p>{task}</p>
            <h6>Group: {3}</h6>
        </div>
    )
}

export default Task