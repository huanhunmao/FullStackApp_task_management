const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const taskRoutes = require('./routes/taskRoutes')
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express()
const port = process.env.PORT || 3001

// Connect to mongodb
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Middleware
app.use(express.json())
app.use('/api',taskRoutes)
app.use(errorMiddleware)

// start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})