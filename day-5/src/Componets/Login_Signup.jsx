import React, { useState } from "react";
import "../App.css";
import Swal from "sweetalert2";

function Login_Signup() {
  let [email, setemail] = useState("");
  let [pass, setpass] = useState("");
  let [user, setuser] = useState("");
  let [lemail, setlemail] = useState("");
  let [lpass, setlpass] = useState("");
  let [arr, arrset] = useState("");
  let [login, loginset] = useState("login");

  function change(e) {
    setemail(e.target.value);
  }

  function change1(e) {
    setpass(e.target.value);
  }

  function change2(e) {
    setuser(e.target.value);
  }

  function add() {
    const obj = {
      email: email,
      pass: pass,
      user: user,
      lemail: lemail,
      lpass: lpass,
    };
    loginset("login1");
    arrset([...arr, obj]);
  }
  function l() {
    const data = arr.filter((el) => el.email === lemail && el.pass === lpass);
    if (data.length > 0) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
    loginset("login");
  }

  console.log(arr);
  return (
    <div>
      {login == "login1" ? (
        <div>
          <div class="box">
            <div class="form">
              <h2>Login</h2>

              <div class="inputBox">
                <input
                  type="email"
                  required="required"
                  onChange={(e) => setlemail(e.target.value)}
                />
                <span>Email</span>
                <i></i>
              </div>
              <div class="inputBox">
                <input
                  type="password"
                  required="required"
                  onChange={(e) => setlpass(e.target.value)}
                />
                <span>Password</span>
                <i></i>
              </div>

              <a>
                <input type="submit" onClick={l} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div class="box">
            <div class="form">
              <h2>Signup</h2>
              <div class="inputBox">
                <input type="text" required="required" onChange={change2} />
                <span>Username</span>
                <i></i>
              </div>
              <div class="inputBox">
                <input type="email" required="required" onChange={change} />
                <span>Email</span>
                <i></i>
              </div>
              <div class="inputBox">
                <input type="password" required="required" onChange={change1} />
                <span>Password</span>
                <i></i>
              </div>
              <div class="links">
                <p>Forgot password?</p>
                <span>Signup</span>
              </div>
              <a>
                <input type="submit" onClick={add} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login_Signup;
