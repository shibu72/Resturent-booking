import React from 'react'

function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-[--secondary3] h-screen flex items-center justify-center'>
        {children}
        
        </div>
  )
}

export default AuthLayout