import { useState } from "react"
import "./todoout"
import Todoout from "./todoout"

function Todolist(){
    let [todo,settodo]=useState("")
    let [arr,setarr]=useState([])
    function add(){
        let obj={
            id:Date.now(),
            work:todo,
            status:false
        }
     setarr([...arr,obj])
    }
    // console.log(arr);
 function del(id){
   let d=arr.filter((e)=>{
    return e.id!=id
  })
  setarr(d)
 }
 function up(id){
   let d=arr.map((e)=>{
    if(e.id==id)
        {
      return {...e,status : !e.status}
        }

   })
   setarr(d)
 }

    return(
        <div>
            <input type="text" onChange={(e)=>settodo(e.target.value)} />
            <button className="btn btn-dark" onClick={add}>Submit</button>
            {
              arr.map((e)=>{
                    return <Todoout data={e} del={del} up={up} />
                })
            }
        </div>
    )

}
export default Todolist