import React, { useEffect } from 'react'
import {fetchTasks, updateTask} from '../actions/taskActions'

function TaskList({tasks, setTasks}){
    const handleCompleted = async(id) => {
        await updateTask(id)
        // 更新数据
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
    }
    
    const tasksByDate = tasks.reduce((acc, task) => {
        const date = task.dueDate ? new Date(task.dueDate).toDateString() : 'no due date'
        acc[date] = acc[date] || []
        acc[date].push(task)
        return acc
    },{})

    return (
        <div>
            {Object.entries(tasksByDate).map(([date, tasks]) => (
                <div key={date}>
                    <h2>{date}</h2>
                    <ul>
                        {   tasks.map((task) => (
                                <li key={task._id} style={{textDecoration:task.completed ? 'line-through': 'none'}}>{task.name}
                                <button onClick={() => handleCompleted(task._id)}>Complete</button>
                                </li>
                        ))
                        }
                    </ul>
                </div>
            ))
            }
        </div>
    )
}

export default TaskList