import { useState } from "react";
import "./App.css";

function App() {

  const [state, setState] = useState({
    name: "", 
  });


  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };


  const submit = () => {
    // Save the form data to localStorage
    localStorage.setItem("user", JSON.stringify(state));
    console.log(state); // Log the state
  };

  return (
    <>
      <div>
        <form>
          <input type="text" name="name" value={state.name} onChange={change} />
          <input type="button" value="Submit" onClick={submit} />
        </form>
      </div>
    </>
  );
}

export default App;
