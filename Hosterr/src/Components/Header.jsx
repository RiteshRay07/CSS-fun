import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-center items-center gap-3'>
        <img src="/assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 py-1.5 px-2.5 text-xs text-white rounded-xl'> Hosterr is Hiring </button>
      </div>
      <ul className='hidden lg:flex justify-center items-center gap-6 font-lato text-gray-500'>
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hosterr?</a></li>
      </ul>
      <div className='hidden lg:flex justify-center items-center gap-6 font-lato'>
        <a className='text-gray-500' href="#">Sign In</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
      </div>
      <div className='lg:hidden'>
      <GiHamburgerMenu className='text-2xl'/>
      </div>
    </div>
  )
}

export default Header
