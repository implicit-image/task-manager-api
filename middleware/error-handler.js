const { TaskAPIError } = require('../errors/custom-error')


const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof TaskAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: err.stack })
}


module.exports = errorHandlerMiddleware
