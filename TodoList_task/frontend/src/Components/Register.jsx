import React, { useState } from 'react'
import { register_action } from '../redux/action'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const nav = useNavigate()
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: ""
  })
  const change = (e) => {
    const { name, value } = e.target
    setstate({
      ...state,
      [name]: value
    })
  }
  const dispatch = useDispatch()
  const submit = (e) => {
    e.preventDefault()
    dispatch(register_action(state, nav))
    setstate({
      username: "",
      email: "",
      password: ""
    })

  }

  return (

    <>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
        <div className="box">
          <div className="form">
            <h2>Signup</h2>
            <form onSubmit={submit}>
              <div className="inputBox">
                <input
                  type="text"
                  name="username"
                  required="required"
                  onChange={change}
                />
                <span>Username</span>
                <i></i>
              </div>
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
                <Link to="/login" className='login_data'>login</Link>
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

export default Register