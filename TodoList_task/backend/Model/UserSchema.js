const mongoose = require('mongoose')

const Userschema = mongoose.Schema({
    username : String ,
    email :  String,
    password : String
})
const UserModel = mongoose.model("User",Userschema)
module.exports = UserModel