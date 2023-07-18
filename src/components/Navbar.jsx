import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import menu from '../images/menu.svg'
import PopupMenu from './PopupMenu'

const Navbar = ({navlinks}) => {
  const [popupState,setPopupState]=useState(false)

  const onTriggerPopup=()=>
    setPopupState(!popupState) 
  
  // console.log(popupState)
  return (
    <>
    <header className='flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0'>
      <nav className='flex items-center justify-between travigo-container'>
        <NavLink to={`/`} className='flex items-center'>
          <img src={logo} alt='logo/img' className='w-22 h-9 object-fill'></img>
        </NavLink>
        <ul className='flex items-center gap-7 lg:hidden'>
          {navlinks?.map((val,i)=>(
          <li key={i}><NavLink to={'#'} className='text-lg text-slate-900'></NavLink>{val.link}</li>
         ))}
          </ul>
          <ul className='flex items-center'>
          <li><button type='button' className='button-emrald px-7 text-base'>Join Us</button></li>
          </ul>
          <ul className='hidden lg:flex items-center'>
            <li>
              <button className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer' onClick={onTriggerPopup}><img src={menu} alt='menu/svg' className='object-cover shadow-sm filter'></img></button>
            </li>
          </ul>
      </nav>
    </header>
    <PopupMenu navlinks={navlinks} popupState={popupState}/>
    </>
  )
}

export default Navbar