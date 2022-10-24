import React from 'react'
import { Search } from './Search'

export const NavBar = () => {
  return (
    <div className='grid grid-cols-1 gap-1 my-4 p-2 items-center sm:grid-cols-4'> 
        <div className='logo flex justify-start  lg:justify-center mb-3 sm:mb-0 '>
          <span className='text-cyan-600 font-bold text-3xl ml-2  '> Com Logo</span> 
       </div>   
        
        <div className='Search px-1 col-span-2 sm:col-span-3 px-2 lg:col-span-2 px-12'>
          <Search/>
        </div>
        <div className='invisible lg:visible'>NEW OFFER</div>
    </div>
  )
}
