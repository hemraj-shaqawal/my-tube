import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Body () {
  return (
    <div className='grid grid-flow-col'>
      <Sidebar/>
      <div className='col-span-11'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Body
