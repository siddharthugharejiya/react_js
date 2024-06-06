import "./App.css"
import { useState } from "react";
function Sign(){

    let [state,setstate]=useState("");
    let [passw,setpass]=useState([]);
    let [arr,setarr]=useState([]);


  function change(e){
    setstate(e.target.value);
  }
  console.log(state);
  function pass(el){
    setpass(el.target.value)
  }
  console.log(setarr);
  function add(){
    let obj={
        task:state,
        password:passw,
    
    }
    setarr([...arr,obj])
    
  }


    return(
        <div>
          <div className="sign">
            <div className="sign-main">
                <div className="sign-head">
                    <h1>Sign In</h1>
                </div>
                <div className="sign-body">

                    <div className="sign-body-1">
                    <input type="text"  placeholder="Username" id="ii" onChange={change}/> 
                    <input type="text"  placeholder="Password" id="ii" onChange={pass}/>
                    <p>Forgot Username / Password?</p>
                    
                    <button id="btn1" onChange={add}>SIGN IN</button>
                    </div>
                
                </div>
               
            </div>
          </div>
        </div>

    )
}
export default Sign