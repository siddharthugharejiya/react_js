import { useState } from "react"
function Todo(){
    let [state,setstate]=useState("");
    let [arr,arrset]=useState([]);

    let c=(e)=>{
        setstate(e.target.value);
    }
    
    let add=(a)=>{
      let obj={
            task:state,
            
         }

         arrset([...arr,obj]);
         
        }
        console.log(arrset);
     
    return(
      
        <div>
            <div className="main">

            <input type="text" onChange={c} />
            <button onClick={add} >Submit</button>
            {
                
                arr.map((el)=>{
                    return(
                        <div>
                             {el.task}
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Todo