import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "./logos.png"
import name from "./MemorEyez.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useState } from 'react'

import {
    faGauge,
    faHospitalUser,
    faBars,
    faClose,
    faGear,
    faDoorOpen,
    faCalendarDays,
  } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const [button, showbutton]=useState(false);

  return (

<div className='nav-bar'>
<Link className="logo" to="/dashboard" onClick={()=>showbutton(false)}>
       <img src={Logo} alt="Logo" />
         <img className="sub-logo" src={name} alt="myName" />

      </Link>

<nav className={button ? 'mobile-button':''}>
  
    <NavLink exact="true" activeclassname="active" to="/dashboard" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faGauge} color="white" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="patients-link" to="/patients" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faHospitalUser} color="white" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="schedule-link" to="/calendar" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faCalendarDays} color="white" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="settings-link" to="/settings" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faGear} color="white" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="signout-link" to="/" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faDoorOpen} color="white" />
    </NavLink>
    {/* <NavLink exact="true" activeclassname="active" className="resume-link" to={pdf} target='_blank' onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faUpRightFromSquare} color="black" />
</NavLink> */}
    <FontAwesomeIcon 
          onClick={() => showbutton(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
</nav>




<FontAwesomeIcon 
          onClick={() => showbutton(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
</div>
   
     
  )
}

export default Sidebar
