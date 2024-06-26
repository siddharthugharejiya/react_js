import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";

function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [arr, setArr] = useState([]);
  const [see, setSee] = useState(false);
  const [see1, setSee1] = useState(true);
  const [form, setForm] = useState(false);
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState(false);
  const [pass1, setPass1] = useState(false);
  const [pass11, setPass11] = useState(false);
  const [login, setLogin] = useState(true);
  const [lemail, setLemail] = useState("");
  const [lpass, setLpass] = useState("");
  console.log(arr);

  const change = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  function error(e) {
    const { value } = e.target;
    if (value.length < 8) {
      setForm(true);
    } else {
      setForm(false);
    }
  }

  const error1 = (e) => {
    const { value } = e.target;
    if (value.length === 0 || !/\S+@\S+\.\S+/.test(value)) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  };

  const error2 = (e) => {
    const { value } = e.target;
    if (value.length < 8) {
      setPass(true);
    } else {
      setPass(false);
    }
  };

  const f = (e) => {
    e.preventDefault();
    setArr([...arr, state]);
    setLogin(false);
    setState({
      name: "",
      email: "",
      pass: "",
    });
  };

  function l(e) {
    e.preventDefault();
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
  }

  return (
    <>
      {login ? (
        <div className="container-fluid">
          <div className="row justify-content-center main">
            <div className="col-3 sec">
              <form action="" onSubmit={f}>
                <h1>Signup</h1>
                <label htmlFor="name" className="text-dark">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Username"
                  onChange={change}
                  value={state.name}
                  onBlur={error}
                />
                <p>
                  {form ? (
                    <span>Username must be at least 8 characters</span>
                  ) : null}
                </p>

                <label htmlFor="email" className="text-dark">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={change}
                  value={state.email}
                  onBlur={error1}
                />
                <p>{email ? <p>Invalid Email</p> : null}</p>

                <label htmlFor="pass" className="text-dark">
                  Password
                </label>
                <div className="password-wrapper">
                  <input
                    type={see ? "text" : "password"}
                    className="form-control"
                    name="pass"
                    placeholder="Password"
                    onChange={change}
                    value={state.pass}
                    onBlur={error2}
                  />
                  <span id="a" onClick={() => setSee(!see)}>
                    <FontAwesomeIcon icon={see ? faEyeSlash : faEye} />
                  </span>
                  <p>{pass ? <p>minimum 8 characters</p> : null}</p>
                </div>
                <button className="btn btn-dark" type="submit">
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="main d-flex justify-content-center align-items-center">
            <div className="box">
              <div className="form">
                <h2>Login</h2>
                <form onSubmit={l}>
                  <div className="inputBox">
                    <input
                      type="email"
                      required="required"
                      onChange={(e) => {
                        setLemail(e.target.value);
                        const { value } = e.target;
                        if (!/\S+@\S+\.\S+/.test(value)) {
                          setEmail(true);
                        } else {
                          setEmail(false);
                        }
                      }}
                      value={lemail}
                    />
                    <span>Email</span>
                    <i></i>
                    <p>{email ? <p>Invalid Email</p> : null}</p>
                  </div>
                  <div className="inputBox">
                    <input
                      type={see1 ? "password" : "text"}
                      required="required"
                      onChange={(e) => setLpass(e.target.value)}
                      value={lpass}
                      onBlur={(e) => {
                        const { value } = e.target;
                        if (value.length < 8) {
                          setPass1(true);
                        } else {
                          setPass1(false);
                        }
                      }}
                    />
                    <span>Password</span>
                    <i></i>
                    <p>{pass1 ? <p>Please minimum 8 characters</p> : null}</p>
                  </div>
                  <button type="submit" className="btn btn-dark ms-5 mt-2">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
