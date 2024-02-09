import React from 'react'
import './index.scss'
import Layout from '../Layout'

import Loader from 'react-loaders'
function Dashboard() {
  return (
    <>
        <Layout/>
    <div className='dashboard-container'>

        <div className='grid'>
   
   
        </div>
    </div>
    <Loader type="ball-clip-rotate-multiple"/>

    </>
  )
}

export default Dashboard
