import React from 'react'
import { Outlet } from 'react-router-dom'
import image from "../../assets/auth-page.png"
import Login from '../../pages/auth/Login'

export default function Auth() {
  return (
    <div className='grid grid-cols-2 items-center container h-screen border rounded-3xl'>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
