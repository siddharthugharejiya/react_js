
import { delete_data, edite_data, email, get_data, password, todo_add, username } from "./actionType"


export const register_action = (state ,nav) => (dispatch)=>{
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
}
export const Login_action = (state,nav) => (dispatch)=>{
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
}
export const todo_action = (state) => (dispatch)=>{
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
} 
export const all_data = () => (dispatch) =>{
   fetch('http://localhost:9595/getting')
   .then(res => res.json())
   .then(res => {
       console.log('Fetched Data:', res.data);
       if (res.data) {
           dispatch({
               type: get_data,
               payload: res.data 
           });
       } else {
           console.error('No data found:', res);
       }
   })
   .catch(err => console.log('Error fetching data:', err));
} 


 
export const del_action = (id) => (dispatch) =>{
   console.log(id);
   
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
} 


export const edite_action = (id, task) => (dispatch) => {
   fetch(`http://localhost:9595/edite/${id}`, {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({ task })
   })
   .then(res => res.json())
   .then(res => {
       console.log('API Response:', res)

       if (res.update) {
           dispatch({
               type: edite_data,
               payload:  res.update.task
           })
       } else {
           console.error('Update data not found in response:', res);
       }
   })
   .catch(err => console.log('Error:', err));
}
