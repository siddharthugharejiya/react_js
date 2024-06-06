import React, { useState } from 'react'

function Login_Signup() {
   let [email,setemail]=useState("");
   let [pass,setpass]=useState("");
   let [arr,arrset]=useState("");
   let [login,loginset]=useState("login");
   function change(e){
    setemail(e.target.value);
   }
//    console.log(email);
 
   function change1(e){
    setpass(e.target.value);
   }
//    console.log(pass);
    function add(){
        let obj={
            email:email,
            pass:pass
        }
     arrset([...arr,obj]);
    }
    console.log(arr);
  return (
    
    <div>
        <h1>signUp</h1>
      <input type="email" placeholder="Enter your email" onChange={change} />
      <input type="password" placeholder="Enter your password" onChange={change1} />
    <button onClick={add}>submit</button>
    </div>
  )
}

export default Login_Signup
