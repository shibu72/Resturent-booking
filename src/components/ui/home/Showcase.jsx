import React from 'react'
import img from '../../../assets/paly-section.png'
import playStore from '../../../assets/play-store.png'
import  appleStore from '../../../assets/apple-store.png'
import arrow from '/images/Vector 9.png'

export default function Showcase() {
  return (
    <div className='flex gap-10 items-center justify-center mt-60 mb-40 relative' >
      <div>
      <div className='grid gap-5 w-[90%]'>
        <h1 className='text-5xl font-semibold text-secondary'>It’s Now More Easy to <span className='text-primary'>Booking</span>  by Our Mobile App</h1>
        <p>All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>
        <div className='flex gap-5 items-center'>
          <img src={playStore} alt="play-store" />
          <img src={appleStore} alt="apple-store" />
        </div>
      </div>
      </div>
      <img className='absolute -top-[25%] right-[20%] rotate' src={arrow} alt="arrow" />
      <img className='w-[30%]' src={img} alt="paly-section" />
    </div>
  )
}
