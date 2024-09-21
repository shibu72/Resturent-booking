import React, { useEffect } from 'react'
import img from '../../../assets/who-we.png'
export default function Service() {
  const  [service, setService] = React.useState([])
  useEffect(()=>{
    fetch('/fake.json').then(res=> res.json()).then(data=> setService(data.services))
  },[])
  return (
    <div className='flex gap-10 items-center justify-between mt-40'>
      <img className='w-[50%]' src={img} alt="Who-we" />
      <div className='flex flex-col gap-5 items-start'>
        <h1 className='text-4xl font-bold'>We are <span className='text-primary'>more</span> than <span className='text-secondary'>multiple</span>  service</h1>
        <p className='text-secondary'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
      <div>
        <ul className='list-none grid grid-cols-2 gap-5 items-center justify-end '>
          {
            service.map((item, index)=><li key={index} className='flex gap-2 items-center justify-start'>
            <img src={item.image} alt='onlineOrder' />
            <span className='inline-block'>{item.title}</span>
          </li>)
          }
        </ul>
      </div>
      </div>
    </div>
  )
}
