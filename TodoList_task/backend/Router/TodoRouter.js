const express = require('express')
const { Todo_con, todo_all_data, todo_del, todo_edite } = require('../contoller/TodoController')

const TodoRouter = express.Router()
TodoRouter.post("/add",Todo_con)
TodoRouter.get("/getting",todo_all_data)
TodoRouter.delete("/del/:id",todo_del)
TodoRouter.post("/edite/:id",todo_edite)

module.exports = TodoRouter