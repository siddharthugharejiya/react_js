const express = require('express')
const { register, Login } = require('../contoller/UserController')
const UserRoute = express.Router()

UserRoute.post("/register",register)
UserRoute.post("/login",Login)




module.exports=UserRoute