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
const edite_controller = async(req,res) =>{
    const id = req.params.id
    console.log(id);
    const data = await TodoModel.findById(id)
    console.log(data);
    res.send({msg:"data added", data : data})
}
const edite_update = async(req,res) =>{
    try {
        const {id} = req.params
    const user = req.body
    // console.log(id,user);
    const data = await TodoModel.findByIdAndUpdate(id,user)
    console.log(`new data added${data}`);
    res.send({data})
    } catch (error) {
     console.log(error);
        
    }
    

}
module.exports = { Todo_con, todo_all_data, todo_del , edite_controller ,edite_update}