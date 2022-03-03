class TaskAPIError extends Error {
  constructor(mesage, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

const createTaskAPIError = (msg, statusCode) => {
  return new TaskAPIError(msg, statusCode)
}

module.exports = {
  TaskAPIError,
  createTaskAPIError
}
