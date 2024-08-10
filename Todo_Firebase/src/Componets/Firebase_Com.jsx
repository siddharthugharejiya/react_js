import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useState ,useEffect} from "react";
import { db } from "../Firebase/db";



export const Firebase_Com = () => {

  const [state, setstate] = useState({
    email: "",
    password: ""
  })
  const change = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value
    });
  };

    const usercollection = collection(db,"users")
  const submit = async(e) => {
    e.preventDefault();

    let obj={
        email:state.email,
        password:state.password
    }
    await addDoc(usercollection,obj)   
    alert("data add successfully")
    get()

}

const [arr,setarr]=useState([])
     const get = async()=>{
         let d=await getDocs(usercollection)

      let getted=d.docs.map((el)=>{
            return{
                id:el.id,
                ...el.data()
            }
         })
         setarr(getted)
     }
     useEffect(() => {
        get()
       }, []);

    const del = async(id) =>{
    let d = await doc(db,"users",id)
    deleteDoc(d)
    get()
    }

    const edit = (id) =>{
        arr.map((el)=>{
          if(el.id == id)
          {
            setstate({
              email:el.email,
              password:el.password
            })
          }
        })
    }
  
  return (
    <>
      <form action="" onSubmit={submit}>
        <input
          type="text"
          name="email"
          value={state.email}
          id=""
          onChange={change}
        />
        <input
          type="text"
          name="password"
          value={state.password}
          id=""
          onChange={change}
        />
        <input type="submit" className="btn btn-dark" />
      </form>
      {arr.map((el)=>(
        <div key={el.id}>
            <div>{el.email}</div>
            <div>{el.password}</div>
            <button className="btn btn-danger" onClick={()=>del(el.id)}>Delete</button>
            <button className="btn btn-primary" onClick={()=>edit(el.id)}>edit</button>
        </div>
      ))}
    </>
  );
};
