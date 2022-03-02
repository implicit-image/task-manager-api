const express = require('express')
const Task = require('../models/task')


const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks }) // { tasks } == { tasks: tasks }
  } catch (error) {
    res.status(500).json({ msg: error.stack })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error.stack })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id:taskID } = req.params
    const task = await Task.findOneAndDelete({ _id:taskID })
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error.stack })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({ id: taskID, data: req.body })
  } catch (error) {
    res.status(500).json({ msg: error.stack })
  }
}

const getTask = async (req, res) => {
  try {
    const { id:taskID } = req.params
    const task = await Task.findOne({ _id:taskID })
    res.json({ id: req.params.id })
    if (!task) {
      // in case request id isnt in the databae
      return res.status(400).json({ msg: `No task with id : ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    // in case request doesnt match the schema
    res.status(500).json({ msg: error.stack })
  }
}


module.exports = {
  getAllTasks,
  deleteTask,
  createTask,
  updateTask,
  getTask
}
