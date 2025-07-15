import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducer";
import { todoReducer } from "./todos/todoReducer";


//here combine two reducers.
export const rootReducer = combineReducers({
    theme : themeReducer,
    todo : todoReducer
})