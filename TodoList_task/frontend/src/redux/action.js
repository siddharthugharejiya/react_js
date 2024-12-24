
import { delete_data, edite_data, email, get_data, password, todo_add, update, username } from "./actionType"


export const register_action = (state ,nav) => (dispatch)=>{
   try {
      fetch("http://localhost:9595/register",{
         method : "POST",
         headers : {
            "Content-Type":"application/json"
         },
         body : JSON.stringify(state)
        })
        .then(res => res.json())
        .then(res =>{
         alert(res.msg)
           nav("/login")
         dispatch({
            type : username,
            payload : res.username
         })
         dispatch({
            type : email,
            payload : res.email
         })
         dispatch({
            type : password,
            payload : res.password
         })
        })
   } catch (error) {
      console.log(error)
      
   }
  
}
export const Login_action = (state,nav) => (dispatch)=>{
   try {
      fetch("http://localhost:9595/login",{
         method : "POST",
         headers : {
            "Content-Type":"application/json"
         },
         body : JSON.stringify(state)
        })   
        .then(res => res.json())
        .then(res =>{
         console.log(res);
         if(res.miss)
            {
               nav("/login")
            }
         alert(res.data)
        localStorage.setItem("login",true)
         nav("/")
         dispatch({
            type : email,
            payload : res.email
         })
         dispatch({
            type : password,
            payload : res.password
         })
         
        })
   } catch (error) {
      console.log(error)
      
   }
      
}
export const todo_action = (state) => (dispatch)=>{
   try {
      fetch("http://localhost:9595/add",{
         method : "POST",
         headers : {
           "Content-Type":"application/json"
         },
         body : JSON.stringify(state)
      })
      .then(res => res.json())
      .then(res => {
            dispatch({
               type : todo_add,
               payload : res.data
            })
      })
   } catch (error) {
      console.log(error)
      
   }
   
} 
export const all_data = () => (dispatch) =>{
   try {
      fetch('http://localhost:9595/getting')
      .then(res => res.json())
      .then(res => {
          if (res.data) {
              dispatch({
                  type: get_data,
                  payload: res.data 
              });
          } else {
              console.log('No data found:', res);
          }
      })
    
   } catch (error) {
     console.log(error)
       
   }
  
} 
 
export const del_action = (id) => (dispatch) =>{
   try {
   fetch(`http://localhost:9595/del/${id}`,{
      method : "DELETE",
      headers : {
         "Content-Type":"application/json"
      },
      body:JSON.stringify({ id }) 
   })
   .then(res => res.json())
   .then(res =>{
      dispatch({
         type : delete_data,
         payload : id
      })
   })
   } catch (error) {
      console.log(error)
   }
   
} 

export const edite_action = (id,task) => (dispatch) =>{
   try {
      fetch(`http://localhost:9595/edite/${id}`)
      .then(res => res.json())
      .then(res =>{
        dispatch({
         type : edite_data,
         payload : res.data
        })
      })   
   } catch (error) {
      console.log(error);
      
   }

   
}


export const edite_update_action = (id,task) => (dispatch)=>{
   try {
      fetch(`http://localhost:9595/edite/${id}`,{
         method : "POST",
         headers : {
           "Content-Type":"application/json"
         },
         body : JSON.stringify({task})
      })
      .then(res => res.json())
      .then(res => {
            dispatch({
               type : update,
               payload : res.data
            })
      })
   } catch (error) {
      console.log(error)
      
   }
   
} 