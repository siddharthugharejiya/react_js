import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    if (login.email) {
      fetch(`http://localhost:3000/User?email=${login.email}`)
        .then(res => res.json())
        .then((res) => {
          localStorage.setItem("Login", true);
          if (res.length > 0) {
            if (res[0].password === login.password) {
              alert("Login Successful");
              navigate("/");
            } else {
              alert("Password Mismatch");
            }
          } else {
            alert("Register first");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <form onSubmit={sub}>
        <input type="email" name="email" onChange={change} />
        <input type="password" name="password" onChange={change} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
