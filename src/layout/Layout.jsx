import React from 'react'
import './layout.css'
import Navbars from '../common/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer/Footer'


function Layout() {
  return (
    <div className='Layout'>
        <Navbars />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout