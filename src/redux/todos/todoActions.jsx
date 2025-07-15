import { ADD_TODO, DELETE_TODO } from "./todoActionTypes"

export const addTodo = (text)=>{
    return {
        type : ADD_TODO,
        payload: text
    }
}

export const deleteTodo = (index)=>{
    return{
        type : DELETE_TODO,
        payload: index
    }
}


