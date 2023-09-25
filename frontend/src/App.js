import React, {useState, useEffect} from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import {fetchTasks, addTask } from './actions/taskActions'

function App(){
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    },[])

    const  handleAddTask = async (task) => {
        if(task.name.length === 0 || task.dueDate.length === 0) {
            alert('添加失败，请添加任务和时间')
            return
        }
        const newTask = await addTask(task)
        setTasks([...tasks, newTask])
    }

    return (
        <div>
            <TaskForm addTask={handleAddTask}/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default App