const express = require('express');
const router = express.Router();
const Task = require('../models/Task')
const validateMiddleware = require('../middleware/validateMiddleware')

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/tasks',validateMiddleware, async (req, res) =>{
    const task = new Task(req.body)
    await task.save()
    res.json(task)
})

router.patch('/tasks/:id', async (req, res) =>{
    const task = await Task.findById(req.params.id)
    task.completed = !task.completed
    await task.save()
    res.json(task)
})

module.exports = router