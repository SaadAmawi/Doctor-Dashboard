import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import './index.scss'
// import Home from '../Home'
// import pdf from './Saad Amawi Resume.pdf'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faFile,
//   faUpRightFromSquare,
// } from '@fortawesome/free-solid-svg-icons'


function Layout (){
  return (
    <div className="App">
    <Sidebar />
      <Outlet />
    </div>
 
  
  )
}

export default Layout
