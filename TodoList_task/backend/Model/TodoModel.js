const mongoose = require('mongoose')


const TodoSchema = mongoose.Schema({
    task : {type : String }
  
})
const TodoModel = mongoose.model("Todo",TodoSchema)
module.exports=TodoModel