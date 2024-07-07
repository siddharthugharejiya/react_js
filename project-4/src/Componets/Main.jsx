 import { useEffect, useState } from "react";
 import { v4 } from "uuid";
import "../App.css"
const Main = () => {
    let [arr,setarr]=useState([]);
    let [state,setstate]=useState({
        id:v4(),
        img:"",
        name:""
    });

    let change =(e)=>{

        setstate({...state,[e.target.name]:e.target.value})

    }
    // console.log(state);
   const submit=(e)=>{
         e.preventDefault();
         setarr([...arr,state]);
         setstate({
            id:v4(),
            img:"",
            name:""})

    }
    useEffect((e)=>{
   console.log(e);
    },[arr])
    const del = (id) =>{
       let data= arr.filter((el)=>{
            if(el.id != id){
                return el
            }
         })
         setarr(data)
    }
    const edit = (e) =>{
      setarr(e)
    }

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-4 mt-5 main">
            <form action="" onSubmit={submit}>
            <input type="text" className="form-control " name="img" onChange={change}  placeholder="image" value={state.img} />
            <input type="text" className="form-control " name="name"  onChange={change} placeholder="enter username" value={state.name}/>
            <input type="submit" value="submit" className="btn btn-dark" /> 
          </form>
            </div>
        
        </div>
        {
            arr.map((el)=>{
                return(
                    <div key={el.id} >
                    <img src={el.img} alt="" />
                     <p>{el.name}</p>
                        <button className="btn btn-danger" onClick={()=>del(el.id)}>Delete</button>
                        <button className="btn btn-primary ms-2" onClick={()=>edit(el.id)}>Edit</button>
                     </div>
                )
            })
        }
      </div>
    </>
  );
};
export default Main;
