import React from 'react'
import { Search } from './Search'

export const NavBar = () => {
  return (
    <div className='grid grid-cols-3 gap-4 my-4 p-4 items-center'> 
        <div className='logo '>
          <span className='text-cyan-600 font-bold text-3xl'> CompanyLogo</span> 
        </div>   
        <div className='Search'>
          <Search/>
        </div>
        <div className='add'>
          ADD SPACE
        </div>
    </div>
  )
}
