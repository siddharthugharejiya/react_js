import React, { useState } from 'react'
import { register_action } from '../redux/action'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


function Register() {
  const nav = useNavigate()
  const [state,setstate]=useState({
    username : "",
    email : "",
    password : ""
  })
  const change = (e) =>{
       const {name , value} = e.target
       setstate({
        ...state,
        [name]:value
       })
  }
  const dispatch = useDispatch()
  const submit = (e) =>{
    e.preventDefault()
    dispatch(register_action(state,nav))
    setstate({
      username : "",
      email : "",
      password : ""
    })
  
  }

  return (
   <form action="" method="post" onSubmit={submit}>
    <input type="text" name='username' placeholder='username' value={state.username} onChange={change}/>
    <input type="text" name='email' placeholder='email' value={state.email} onChange={change}/>
    <input type="text" name='password' placeholder='password' value={state.password} onChange={change}/>
    <input type="submit"/>
   </form>
  )
}

export default Register