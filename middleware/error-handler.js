const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  return res.status(500).json({ msg: err.stack })
}


module.exports = errorHandlerMiddleware
