import {INC} from "./actionType"
const intialstate={
    count : 0,
    count1 : 0
};
const reducer=(state=intialstate,action)=>{
   switch(action.type)
   {
     case INC:
     return {
        ...state,count:state.count+1
     }
     case INC:
      return {
         ...state,count1:state.count1+3
      }
     default:
        return state
   }
}
export default reducer