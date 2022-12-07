import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { AppState} from '../utils/types/types'

export const Head = () => {

  const cart:any=useSelector((state:AppState)=>state.cartReducer)

  return (
    <>
    <section className="head bg-cyan-500 text-white">
    <div className="flex flex-row lg:flex-row-reverse ">
        <Link to="/fashionEcommerce/customercare">
        <div className='mx-4'>Customer Care</div>
        </Link>

        <Link to="/fashionEcommerce/signin">
        <div className='mx-4'>Sign In </div>
        </Link>
        
        <Link to="/fashionEcommerce/signup">
        <div className='mx-4'>Sign Up</div>
        </Link>

        <Link to="/fashionEcommerce/cart">
        <div className='mx-4'>Cart<span className='bg-red-700 px-2 mx-2 rounded-full' >{cart.cartTotalQuantity}</span></div>
        </Link>
      </div>
    </section>
    </>
  )
}
