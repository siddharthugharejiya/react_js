import { useState } from "react";
import "../App.css"
function Project() {
  let [state,setstate]=useState({
    pro_name:"",
    pro_img:""
  });
  let [arr,setarr]=useState([]);


  function change(e){
    let {name,value}=e.target
     setstate({...state,[name] : value})
  }
  function add(){
    setarr([...arr,state])
    alert("successfull")
  }
  console.log(arr);
return(
  <div>
    <div className="main">
    <input type="text" name="pro_name" placeholder="product_Name" className="form-control" onChange={change} />
    <input type="text" name="pro_img" placeholder="product_Img" className="form-control" onChange={change} style={{height:"300px"}}/>
    <button className="btn btn-danger" onClick={add}>add</button>
    {
    arr.map((e)=>{
      return(
<div>
        <p>{e.pro_name}</p>
        <img src={e.pro_img} alt="" />
        </div>
      )
    })
  }
    </div>
  </div>
)
}

export default Project;
