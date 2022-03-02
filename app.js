const { connectDB } = require('./db/connect.js')
const express = require('express')
const dotenv = require('dotenv')
const tasks = require('./routes/tasks')
const cors = require('cors')

dotenv.config()

const app = express()
const PORT = process.env.PORT
const DB_AUTH_URI = process.env.DB_AUTH_URI

app
  .use(express.json())
  .use(cors())

app.use('/api/v1/tasks', tasks)


// declare a start function
const start = async () => {
  try {
    await connectDB(DB_AUTH_URI)
    app.listen(PORT, console.log(`Server is listening on ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
