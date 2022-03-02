const express = require('express')
const dotenv = require('dotenv')
const tasks = require('./routes/tasks')
const cors = require('cors')

dotenv.config()
const app = express()
const PORT = process.env.PORT

// GET /api/v1/tasks
// POST /api/v1/tasks
// GET /api/v1/tasks/:id
// PATCH /api/v1/tasks/:id
// DELETE /api/v1/tasks/:id

app
  .use(express.json())
  .use(cors())

app.use('/api/v1/tasks', tasks)

app.listen(PORT, console.log(`Server is listening on ${PORT}`))
