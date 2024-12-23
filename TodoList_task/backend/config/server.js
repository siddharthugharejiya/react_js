const { default: mongoose } = require("mongoose");

const Server = async () => {
    await mongoose.connect("mongodb+srv://multiera95:95@todolist.jx2xw.mongodb.net/?retryWrites=true&w=majority&appName=TodoList")
    console.log("Server is connected");

}
module.exports = Server