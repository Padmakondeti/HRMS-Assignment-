import React from 'react'

const NavBar = () => {
  return (
    <div className='container flex items-center justify-between h-16 px-4 mx-auto bg-black sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between h-16'>
        <button className='ml-2 text-lg font-bold text-black'>
          Log in
        </button>
      </div>
      <div className='flex-row items-center gap-8 p-2 text-lg font-medium md:flex'>
        <>
          <div className='flex'>
            <button className='ml-2 text-lg font-bold text-black'>
              Register
            </button>
          </div>
        </>
      </div>
    </div>
  )
}

export default NavBar
