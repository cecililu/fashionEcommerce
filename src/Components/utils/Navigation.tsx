import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { CostumerCare } from '../programs/CostumerCare';
import { MainPage } from '../programs/MainPage';
import { SignIn } from '../programs/SignIn';
import { SignUp } from '../programs/SignUp';
  
export const Navigation = (children:any) => {
  return (
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/customercare" element={<CostumerCare/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    )
}
