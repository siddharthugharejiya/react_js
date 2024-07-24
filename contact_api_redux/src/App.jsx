import React, { useContext } from 'react';
import './App.css';
import { Main } from './Compontes/ContextApi';

function App() {
  const { state, dispatch } = useContext(Main);

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>INC</button>
      <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
    </>
  );
}

export default App;
