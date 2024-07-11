import React from 'react';
import TodoList from './TodoList';
import { useState } from 'react';
import "../App.css"
const TodoInput = () => {

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



  let del=(id)=>{
    let d=arr.filter((e)=>e.id!==id)
    setarr(d)
  }

  let up=(id)=>{
  let d=   arr.map((e)=>{
    
            if(e.id==id){
            return {...e,status : !e.status}
            }
        else{
            return e
        }
     })
     setarr(d)
  }



    return (
        <div>
            <div className='d-flex justify-content-center mt-2 ti'>
            <input type="text" placeholder="Enter Todo Item" className='form-control w-25' onChange={(e)=>settodo(e.target.value)}/>

            <button className='btn btn-light ms-2' onClick={add}>Add</button>
            <div className="sec">
            {
              arr.map((e)=>{
                  return <TodoList key={e} data={e} del={del} up={up} />
              })
            }
            </div>
            
            </div>
        </div>
    );
}

export default TodoInput;
