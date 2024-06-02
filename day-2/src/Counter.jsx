import { useState } from "react";

import "./App.css";

function Counter() {
  let [count, setcout] = useState(0);
//   count=0;

  function add(){
    setcout(count+1);
  }

  function min(){
    if(count!=0)
        {

            setcout(count-1)
        }
  }
  function reset(){
    setcout(0);
  }

  return (
    <div id="main-counter">
        {/* <canvas id="canvas"></canvas> */}
      <h1>Counter</h1>
      <div id="c">{count}</div>

<div>
        <button onClick={add} id="btn">+</button>
        <button onClick={min} id="btn">-</button>
        <button onClick={reset} id="btn">reset</button>
        </div>
      
    </div>

  );
}
export default Counter;
