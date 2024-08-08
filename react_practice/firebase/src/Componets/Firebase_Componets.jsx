import { collection } from 'firebase/firestore'
import React, { useState } from 'react'

function Firebase_Componets() {

    const [state,setstate]=useState({
        email:"",
        password:""
    })

    const change = (e) =>{
       const {name,value}=e.target
        setstate({
            ...state,
            [name]:value
        })
    }
         const usercollaction = collection(db,"users")
    const submit = (e) =>{
        e.preventDefault()


        
    }
  return (
           <>
           <div className="d-flex justify-content-center">

           <form action="" className='w-25' onSubmit={submit}>
            <input type="text" placeholder='email' name='email' value={state.email} onChange={change} className='form-control' />
            <input type="text" placeholder='password' name='password' value={state.password} onChange={change} className='form-control'/>
            <input type="submit" value={"submit"} className='btn btn-dark mt-1'/>
           </form>
           </div>
           </>
  )
}

export default Firebase_Componets
