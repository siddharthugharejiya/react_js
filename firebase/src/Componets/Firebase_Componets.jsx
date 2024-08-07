import { addDoc , collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase'


const Firebase_Componets = () => {
     const [state,setstate]=useState({
      email:"",
      password:""
     })
const [arr,setarr]=useState([])
     const change = (e) =>{
      const {name,value}=e.target
        setstate({
          ...state,
          [name]:value

        })
     }

     const submit = async(e) =>{
      e.preventDefault()
      let obj={
        email:state.email,
        password:state.password
      }

   let data=await addDoc(usercollection,obj)
   console.log(data);
   alert("data add successfully")
    }
     const usercollection = collection(db,"user")

   const get=async()=>{
     const getted=await getDocs(usercollection)
     console.log(getted);
     let d=getted.docs.map((el)=>{
      return{
        id:el.id,
        ...el.data()
      }
    })
    setarr(d)
   }
   console.log(arr);
   
   useEffect(()=>{
    get()
   },[])
  return (
    <div>
     <form action="" onSubmit={submit}>
        <input type="text" name='email' value={state.email} onChange={change} />
        <input type="text" value={state.password} name='password' onChange={change} />
        <input type="submit" />
     </form>
     {
      arr.map((el)=>{
        return(
         <>
         <p>{el.id}</p>
          <p>{el.email}</p>
          <p>{el.password}</p>
         </> 
        )
      })
     }
    </div>
  )
}

export default Firebase_Componets
