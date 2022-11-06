import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'

export const CategoryNavigation = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-5">
            <div className="col-span-0 sm:col-span-1 h-0">
             <Sidebar/>
              </div> 
             <div className="main bg-cyan-200 col-span-4 ">
               <img className="" src="banner.jpg" alt="product image" />
             </div>
          </div>
    </div>
  )
}
