const express = require('express')

const getAllTasks = (req, res) => {
  res.send('get all tasks')
}

const createTask = (req, res) => {
  res.send('create task')
}

const deleteTask = (req, res) => {
  res.send('delete task')
}

const updateTask = (req, res) => {
  res.send('upate task')
}

const getTask = (req, res) => {
  res.send('get task')
}


module.exports = {
  getAllTasks,
  deleteTask,
  createTask,
  updateTask,
  getTask
}
