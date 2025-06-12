import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(6%,48px)]' src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:test-sm'>Logout</button>
    </div>
  )
}

export default Navbar
