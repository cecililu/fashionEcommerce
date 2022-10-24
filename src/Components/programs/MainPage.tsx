import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'

export const MainPage = () => {
  return (
    <div>
      <div className="grid grid-cols-5 ">
            <div className="col-span-1">
            <Sidebar/>
              </div> 
             <div className="main">
              Main
             </div>
          </div>
    </div>
  )
}
