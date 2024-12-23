import React, { useState } from 'react'
import { Login_action } from '../redux/action'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


function Login() {
    const nav = useNavigate()
  const [state,setstate]=useState({
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
    dispatch(Login_action(state,nav))
    setstate({
      username : "",
      email : "",
      password : ""
    })
  
  }

  return (
   <form action="" method="post" onSubmit={submit}>
    <input type="text" name='email' placeholder='email' value={state.email} onChange={change}/>
    <input type="text" name='password' placeholder='password' value={state.password} onChange={change}/>
    <input type="submit"/>
   </form>
  )
}

export default Login