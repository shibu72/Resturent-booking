import React from 'react'
import logo from '/images/booktable.png'
export default function Login() {
  return (
    <div className='grid gap-4 items-center justify-center'>
      <img src={logo} alt="" />
      <form action=""  className='flex flex-col gap-5'>
      <h1 className='text-2xl text-center'> Greate to have you back!</h1>
        <div className='w-full'>
        <label htmlFor="user" >User Name or Email</label>
        <br />
        <input type="text" id="user" name="user" className='w-full border p-2 rounded'/>
        </div>
        
        <div className='w-full'>
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" className='w-full border p-2 rounded'/>
        </div>

        <input type="submit" value="sign in" className='uppercase text-sm text-white bg-secondary p-2 rounded mt-5' />
      </form>

<span className='text-center mt-5'> New here?  <a href="/register" className='text-primary '>Create a your account</a></span>
    </div>
  )
}
