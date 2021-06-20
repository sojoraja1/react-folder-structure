import * as countActionTypes from "../actions/countActionTypes";
const initialState ={count:0};
export const countReducer =(state = initialState,action)=>{
     switch (action.type) {
         case countActionTypes.INCREMENT:
                return {count:state.count+1};
         case countActionTypes.DEC:
                return {count:state.count-1};
         default:
                return {...state};
     }

}