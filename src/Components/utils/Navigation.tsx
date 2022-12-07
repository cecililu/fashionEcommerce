import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
  } from "react-router-dom";
import { CostumerCare } from '../programs/CostumerCare';
import { SignIn } from '../programs/SignIn';
import { SignUp } from '../programs/SignUp';
import { Home } from '../programs/Home';
import { ProductDetailPage } from '../programs/ProductDetailPage';
import { CartPage } from '../programs/CartPage';
export const Navigation = (children:any) => {
  
 
  return (
      <Routes>
        <Route path="/fashionEcommerce/" element={<Home/>}/>
        <Route path="/fashionEcommerce/customercare" element={<CostumerCare/>}/>
        <Route path="/fashionEcommerce/signin" element={<SignIn/>}/>
        <Route path="/fashionEcommerce/signup" element={<SignUp/>}/>
        <Route path="/fashionEcommerce/product/:userId" element={<ProductDetailPage  />}/>
        <Route path="/fashionEcommerce/cart" element={<CartPage/>}/>
    </Routes>
    )
}
