import { useState } from "react"
import "./App.css"

function Counter(){
    let [state,setstate]=useState(0);
       
 let a=1;
 
  function count(){
      setstate(state+a)
   
  }
  function countdecrease(){
    setstate(state-a)
    if(state==0)
        {
            alert("please value enter positive");
           
        }
  }
  

    return(
        <div>
            <h2>Counter</h2>
            <div id="c">{state}</div>
            <button onClick={count} id="btn">+</button>
            <button onClick={countdecrease} id="btn">-</button>
        </div>
    )
}
export default Counter