import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Form() {
  let [state, setState] = useState({
    name: "",
    email: "",
    pass: "",
  });

  let [arr, setarr] = useState([]);
  let [see, setsee] = useState(false);

  const change = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  

  const f = (e) => {
    e.preventDefault();
    setarr([...arr, state]);
    setState({
      name: "",
      email: "",
      pass: "",
    });
  };

  console.log(arr);

  return (
    <>
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
              />
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
              />
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
                  value={state.pass}/>
                <span id="a" onClick={() => setsee(!see)}>
                  <FontAwesomeIcon icon={see ? faEyeSlash : faEye} />
                </span>
              </div>
              <button className="btn btn-dark" type="submit">
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form
