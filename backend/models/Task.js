const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      dueDate: {
        type: Date
      }
})

const Task =  mongoose.model('Task', taskSchema)

module.exports = Task