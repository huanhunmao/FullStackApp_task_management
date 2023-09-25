import axios from 'axios';

export const fetchTasks = async () => {
    const response = await axios.get('/api/tasks')
    return response.data
}

export const addTask = async (task,dueDate) => {
    const response = await axios.post('/api/tasks', task,dueDate)
    return response.data
}

export const updateTask = async (id) => {
    const response = await axios.patch(`/api/tasks/${id}`)
    return response.data
}