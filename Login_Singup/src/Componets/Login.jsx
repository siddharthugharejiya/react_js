import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const change = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const sub = (e) => {
    e.preventDefault();
    if (login.email === "" || login.password === "") {
      localStorage.setItem("Login", false);
    }
   else if (login.email) {
      fetch(`http://localhost:3000/User?email=${login.email}`)
        .then(res => res.json())
        .then((res) => {
          if (res.length > 0) {
            localStorage.setItem("Login", true);
            navigate("/");
            Swal.fire({
              title: "Login Successfull!",
              text: "You clicked the button!",
              icon: "success"
            });
          } else {
     
            Swal.fire({
              icon: "Register first",
              title: "Oops...",
              text: "Something went wrong!",
              // footer: '<a hr.\ef="#">Why do I have this issue?</a>'
            });
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          alert("An error occurred. Please try again.");
        });
    } else {
      alert("Please enter your email.");
    }
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="box mt-5">
        <form className="form" onSubmit={sub}>
          <h2>Login</h2>
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
          <input type="submit" value="Login" className="btn border border-1" />
        </form>
      </div>
    </div>
  );
}

export default Login;
