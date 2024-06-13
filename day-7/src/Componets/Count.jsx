import { useState } from "react"


function Count(){
    let [state,setstate]=useState({
        up:0,
        thor:1
    });
    
    var increment = () =>{
        setstate({up:state.up +1,thor:state.thor+1});
        }

        var des = () =>{
            setstate({up:state.up-1,thor:state.thor-1})
        }
        

//    console.log(state);
   return(
       <div>
        <div className="d-flex">
        <h3>{state.up} -  </h3>   <h3> {state.thor}</h3>
        </div>
        <button className="btn btn-danger fs-3 px-4" onClick={increment}>+</button>
        <button className="btn btn-warning fs-3 px-4" onClick={des}>-</button>
    </div>
   )
}
export default Count