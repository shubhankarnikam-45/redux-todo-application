
import React, { useState } from 'react'
import "../styles/inputbox.css"
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todoActions';
const InputDataBox = () => {

    const dispatch = useDispatch();
    //this usestate holds the current task.
    const[text, setText] = useState("");

    // console.log("input value",text);
    const handleClick = ()=>{
        dispatch(addTodo(text))
        setText("");
    }

  return (
    <>
        <input placeholder='Enter Task' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className='add_task_btn' onClick={handleClick}>Add Task</button>
    </>
  )
}

export default InputDataBox