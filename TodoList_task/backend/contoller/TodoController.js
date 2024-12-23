const TodoModel = require("../Model/TodoModel");

const Todo_con = async (req, res) => {
    try {

        let data = await TodoModel.create(req.body);
 

        res.send({ data: data })

    } catch (error) {
        res.send(error)
    }
}
const todo_all_data = async (req, res) => {
    try {
        let data = await TodoModel.find()
        console.log(data);

        res.send({ data: data })
    } catch (error) {
        res.send({ data: error })
    }
}
const todo_del = async (req, res) => {
    try {
        const { id } = req.params

        let data = await TodoModel.findByIdAndDelete(id)

        if (!data) {
            return res.send({ msg: "User id not found" })
        }

        res.send({ msg: "Item deleted successfully", data: data })
    } catch (error) {
        res.send({ error: error })
    }
}
const todo_edite = async (req, res) => {
    const { id } = req.params;
    const user_data = req.body;
    
    try {
        const data = await TodoModel.findByIdAndUpdate(id, user_data)
        res.send({ msg: "Item updated successfully", update : data })
    } catch (error) {
        res.send({ msg: "Error updating item", error })
    }
}

module.exports = { Todo_con, todo_all_data, todo_del, todo_edite  }