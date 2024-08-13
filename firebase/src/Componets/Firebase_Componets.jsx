import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase'
// import { btn } from 'bootstrap';
import "../App.css"

const Firebase_Components = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [arr, setArr] = useState([]);
  const usercollection = collection(db, "user");

  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const [update,setupdate]=useState(null)

  const submit = async (e) => {
    e.preventDefault();
    let obj = {
      email: state.email,
      password: state.password
    };

    if(update != null)
    {
     let d=doc(db,"user",update)
     await updateDoc(d,obj)
     setupdate(null)
    }
    else{
    
      await addDoc(usercollection, obj);
      alert(`Data added successfully`);
    }

    get(); 
    setState({ email: "", password: "" }); 

    setupdate(id)
  };

  const get = async () => {
    const getted = await getDocs(usercollection);
    let d = getted.docs.map((el) => {
      return {
        id: el.id,
        ...el.data()
      };
    });
    setArr(d);
  };

  useEffect(() => {
    get();
  }, []); 

  const del = async (id) => {
    let d = doc(db, "user", id);
    await deleteDoc(d);
    get(); 
    alert("Deleted successfully");
  };


     const edit = (id) =>{
      console.log(id);
      console.log(arr);
      arr.map((el)=>{
        if(el.id==id)
        setState({
          email:el.email,
          password:el.password
        })
        setupdate(id)
      })
      
     }


  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={state.email} onChange={change} className='formcontrol'/>
        </div>
        <label>Password:</label>
          <input type="text" name="password" value={state.password} onChange={change} />
        <br />
        <input type="submit" value={update != null ? "Update" : "Submit"}/>
      </form>
      <div>
        {arr.map((el) => (
          <div key={el.id}>
            <div>{el.email}</div>
            <div>{el.password}</div>
            <button onClick={() => del(el.id)} >Delete</button>
            <button onClick={()=>edit(el.id)}>edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Firebase_Components;
