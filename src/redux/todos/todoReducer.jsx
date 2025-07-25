import { ADD_TODO, DELETE_TODO } from "./todoActionTypes";



const initialState = {
    todos : []
}


export const todoReducer = (state = initialState, action)=>{

    // console.log(state);
    switch (action.type) {
        case ADD_TODO:
            return { 
                ...state, todos :[...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state, todos : state.todos.filter((data, i)=>i !== action.payload)
            }
        default:
            return state;
    }
};