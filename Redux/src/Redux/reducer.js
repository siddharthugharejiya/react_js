import {INC} from "./actionType"
const intialstate={
    count : 0
};
const reducer=(state=intialstate,action)=>{
   switch(action.type)
   {
     case INC:
     return {
        ...state,count:state.count+1
     }
     default:
        return state
   }
}
export default reducer