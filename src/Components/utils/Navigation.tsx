import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
  } from "react-router-dom";
import { CostumerCare } from '../programs/CostumerCare';
import {CategoryNavigation} from '../programs/CategoryNavigation';
import { SignIn } from '../programs/SignIn';
import { SignUp } from '../programs/SignUp';
import { ProductDispay } from '../programs/ProductDispay';
import { Home } from '../programs/Home';
import { ProductDetail } from '../programs/ProductDetail';
  
export const Navigation = (children:any) => {
  let { userId } = useParams();
  console.log('product no',userId)
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/customercare" element={<CostumerCare/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/product/:userId" element={<ProductDetail id={userId}/>}/>
    </Routes>
    )
}
