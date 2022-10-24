import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { SidebarSub } from './SideSub/SidebarSub';

  
export const Navigation = (children:any) => {
  return (
      <Routes>
        <Route path="/eletronics" element={<SidebarSub />}/>
        <Route path="/shoes" element={<SidebarSub />}/>
        <Route path="/menswear" element={<SidebarSub />} />  
      </Routes>
    )
}
