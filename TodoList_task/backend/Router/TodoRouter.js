const express = require('express')
const { Todo_con, todo_all_data, todo_del, edite_controller, edite_update } = require('../contoller/TodoController')

const TodoRouter = express.Router()
TodoRouter.post("/add",Todo_con)
TodoRouter.get("/getting",todo_all_data)
TodoRouter.delete("/del/:id",todo_del)
TodoRouter.get("/edite/:id",edite_controller)
TodoRouter.post("/edite/:id",edite_update)

module.exports = TodoRouter