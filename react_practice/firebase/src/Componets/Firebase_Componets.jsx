import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";

function Firebase_Componets() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  };
  const usercollaction = collection(db, "task");

  const submit = async (e) => {
    e.preventDefault();
    let obj = {
      email: state.email,
      password: state.password,
    };
    if(update != null)
    {
     let d = await doc(db,"task",update)
    await updateDoc(d,obj)
    }
    else{

      await addDoc(usercollaction, obj);
      alert("data added successfully");
    }
    setupdate(null)

    get_f()
    setstate({
      email:"",
      password:""
    })
    
  }
const [arr,setarr]=useState([])
const [update,setupdate]=useState(null)


 
   const get_f = async () => {
    let getted = await getDocs(usercollaction);
    let data = getted.docs.map((el) => {
        return {
            id: el.id,
            ...el.data(),
        };
    });
    setarr(data)

    
}
const del = async(id) =>{
  let d = await doc(db,"task",id)
  await deleteDoc(d)
     get_f()
}

useEffect(()=>{
    get_f()
},[])
const edit = (id) =>{
  arr.map((el)=>{
     if(el.id == id)
     {
      setstate({
        email:el.email,
        password:el.password
      })
     }
     setupdate(id)
  })
}
// console.log(update);




  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{flexDirection:"column"}}>
        <form action="" className="w-25" onSubmit={submit}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={state.email}
            onChange={change}
            className="form-control"
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={change}
            className="form-control"
          />
          <input type="submit" value={update ? "Update" : "Submit"} className="btn btn-dark mt-1" />
        </form>
        {
            arr.map((el)=>(
                <div key={el.id}>
                <div>{el.email}</div>
                <div>{el.password}</div>
                <button className="btn btn-danger" onClick={()=>del(el.id)}>Delete</button>
                <button className="btn btn-primary" onClick={()=>edit(el.id)}>Edit</button>
                </div>
            ))
        }
      </div>
    </>
  );
}

export default Firebase_Componets;
