import React, { useState } from 'react'
import { Login_action } from '../redux/action'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';


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
    console.log();
    setstate({
      email : state.email,
      password : state.password
    })
    dispatch(Login_action(state,nav))
    
    console.log(state);
    
  
  }

  

  return (
  <>
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
        <div className="box">
          <div className="form">
            <h2>Login</h2>
            <form onSubmit={submit}>
              <div className="inputBox">
                <input
                  type="email"
                  name="email"
                  required="required"
                  onChange={change}
                />
                <span>Email</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  required="required"
                  onChange={change}
                />
                <span>Password</span>
                <i></i>
              </div>
              <div className="links">
                <p>Forgot password?</p>
                <Link to="/register" className='login_data'>SignUp</Link>
              </div>
              <button
                type="submit"
                className="btn border border-1 text-light"

              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
  </>
  )
}

export default Login