import { useEffect, useState } from "react";

const Signup = () => {
  const [state, setState] = useState({
    user: "",
    pass: "",
    email: ""
  });

  const change = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:8000/UserName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setState({
      user: "",
      pass: "",
      email: ""
    });
  };

  return (
    <>
      <form action="" className="form" onSubmit={submit}>
        <label htmlFor="user" className="label">Username</label>
        <input
          type="text"
          className="form-control"
          name="user"
          required
          value={state.user}
          onChange={change}
        />

        <label htmlFor="email" className="label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          required

          value={state.email}
          onChange={change}
        />

        <label htmlFor="pass" className="label">Password</label>
        <input
          type="password"
          className="form-control"
          name="pass"
          value={state.pass}
          required

          onChange={change}
        />
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </>
  );
};

export default Signup;
