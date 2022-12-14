import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import banner from '../../banner.jpg'
export const CategoryNavigation = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-5 mt-5">
            <div className="col-span-0 sm:col-span-1 h-0">
             <Sidebar/>
              </div> 
             <div className="main bg-cyan-200 col-span-5 lg:col-span-4 ">
               <img className="" src={banner} alt="product image" />
             </div>
          </div>
    </div>
  )
}
