import React from 'react'
import "../styles/toogleTheme.css"
import { useDispatch, useSelector } from 'react-redux'
import { toogleTheme } from '../redux/theme/themeActions';
const ToogleTheme = () => {

    const theme = useSelector((state)=>state.theme.darkTheme);
    const dispatch = useDispatch();
    // console.log("in theme ", theme)
    const handleToogle = ()=>{
        dispatch(toogleTheme())
    }

    

  return (
    <div className='theme_container'>
        <span className='logo'>Todo App</span>
        <button onClick={handleToogle} className='theme-btn'>Toogle Theme</button>
    </div>
  )
}

export default ToogleTheme;