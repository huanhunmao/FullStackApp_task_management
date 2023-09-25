import React,{useState} from "react";

function TaskForm({addTask}){
    const [task, setTask] = useState('')
    const [dueDate, setDueDate] = useState('')

    const handleInputChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask({name: task, dueDate})
        setTask('')
        setDueDate('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleInputChange}/>
            <input 
            type="datetime-local"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm;