import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { signup_action } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar_1";
import Footerd from "./Footerd";

const S_up = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup_action(form, navigate));
 
  };

  return (
    <div>
      <Navbar1 />
       <div className="container d-flex justify-content-center">
       <div className="sign">
        <div className="sign-design">
          <div className="container text-light">
            <h1>Sign In</h1>
            <p>
              Get access to your Orders, Wishlist and <br /> Recommendations
            </p>
          </div>
        </div>
        <div className="sign-left">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">UserName</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={form.username}
                onChange={handleChange}
              />

              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
       </div>
      

      <Footerd />
    </div>
  );
};

export default S_up;
