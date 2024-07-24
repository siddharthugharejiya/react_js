import { act } from "react"

let initial={
    isLogin:false,
    wrongpass:false,
    user:[]
}
export const Logreducer = (state=initial,action) =>{
         switch(action.type)
         {
            case "Login":
            return {
                ...state,
                isLogin:true,
                user:action.payload
            }
            case "wrongpass":
            return {
                ...state,
                wrongpass:true,

            }

            default:
            return state
         }   
}
