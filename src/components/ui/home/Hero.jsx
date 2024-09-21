import React from 'react'

import banner from  '../../../assets/banner.png'
import arrow from '/images/groupArrow.png'
import InputSearch from '../InputSearch'

export default function Hero() {
  return (
    <>
    <div className='flex items-center justify-between mt-20 relative'>
      <div className='grid gap-5 w-[45%]'>
        <h1 className='text-5xl font-semibold font-[arial] leading-tight'>Good <span className='text-primary'>booking</span>, great <br /> memories</h1>
        <p className='text-3xl font-[dm sans] leading-normal'>Enable diners to customize their booking by requesting a specific table location or view.</p>
        <InputSearch/>
      </div>
      <img className='absolute top-[-5%] right-[35%] w-[45%]' src={arrow} alt="" />
      <img className='w-[50%]' src={banner} alt="" />
    </div>
    </>
  )
}
