

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/todolist.css"
import { deleteTodo } from '../redux/todos/todoActions'
const TodoList = () => {

    //import the todo data.
    const todoData = useSelector((state)=>state.todo.todos)
    // console.log("todo list data", todoData)

    const dispatch = useDispatch();

    const handleDelete = (index)=>{

        // console.log("index ", index);
        dispatch(deleteTodo(index));
    }
  return (
    <div className='todolist_div'>
        {
            todoData.map((item, index)=>{
                return <div className='todolist_con'><h3>{item}</h3> <button className='delete-btn' onClick={()=>handleDelete(index)}>Delete</button></div>
            })
        }
    </div>
  )
}

export default TodoList