import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div className='bg-bg_hero bg-no-repeat bg-contain bg-top'>
        <Navbar />
        <div className='min-h-screen container'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
