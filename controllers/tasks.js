const express = require('express')
const Task = require('../models/task')


const getAllTasks = (req, res) => {
  res.send('get all tasks')
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
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
