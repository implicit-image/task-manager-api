const { connectDB } = require('./db/connect')
const express = require('express')
const dotenv = require('dotenv')
const tasks = require('./routes/tasks')
const cors = require('cors')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

dotenv.config()

const app = express()

app
  .use(express.json())
  .use(cors())
  .use(notFound)
  .use(errorHandler)


const PORT = process.env.PORT || 3000
const DB_AUTH_URI = process.env.DB_AUTH_URI
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
