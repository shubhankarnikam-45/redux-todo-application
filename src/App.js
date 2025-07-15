
import React from 'react'
import ToogleTheme from "./components/ToogleTheme"
import "./App.css"
import { useSelector } from 'react-redux'
import InputDataBox from './components/InputDataBox'
import TodoList from './components/TodoList'


const App = () => {

  //to change the backgroudn color dark - light theme.
  const checkTheme = useSelector((state)=>state.theme.darkTheme)
  return (
    <div className={checkTheme ? ("container_light") : ("container_dark")}>
      <ToogleTheme/>
      <InputDataBox/>
      <TodoList/>

    </div>
  )
}

export default App