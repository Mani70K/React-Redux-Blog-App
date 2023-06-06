import { ADD_DATA,LOAD_DATA,DELETE_DATA,SINGLE_DATA,EDIT_DATA,CHANGE_LIKE } from "../actions/postAction"


export const postReducer=(state=[],{type,payload})=>{
    switch(type){
        case LOAD_DATA:
            return payload
        case ADD_DATA:
            return {...state}
        case DELETE_DATA:
            return payload
        case SINGLE_DATA:
            return payload
        case EDIT_DATA:
            return "Edited Successfully"    
        case CHANGE_LIKE:
            return "Change Button Color"        
        default: return state            
    }
}