import { DATA } from "./actiontype"


export const product_action = () =>(dispatch)=>{
         fetch(`https://mock-server-rea1.onrender.com/product`)
         .then(res => res.json())
         .then(data=>{
            dispatch({
                type:DATA,
                payload:data
            })
         })
}