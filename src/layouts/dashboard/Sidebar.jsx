import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='col-span-2 bg-secondary h-[calc(100vh-40px)] rounded'>
      
        <div className='flex flex-col'>
        <Link to="/dashboard/earnings">Earnings</Link>
        <Link to="/">Home</Link>
        </div>
    </div>
  )
}
