import React from 'react'
import {AppDispatch} from '../../utils/Store/store'
import { increaseQuantity,decreaseQuantity,remove } from '../../utils/cartReducer/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppState} from '../../utils/types/types'
export const CartItem = (data:any) => {
  
  const {title,price,image,id}=data.data.data
  const thisdata=data.data.data
  const{cartQuantity}=data.data
  const dispatch=useDispatch<AppDispatch>()
  const cart:any=useSelector((state:AppState)=>state.cartReducer) 


  const handledecreament=(data:any)=>{
     dispatch(increaseQuantity(thisdata))
  }
  const handleremove=(data:any)=>{
    console.log('handle remover',data.data)
    dispatch(remove(thisdata))
 }
  const handleIncreament=(data:any)=>{
    console.log('clicked')
    dispatch(decreaseQuantity(thisdata))

 }
    return (
      <div> <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5"> 
        <div className="w-20">
          <img className="h-17" src={image} alt=""/>
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">Brand name</span>
          <span onClick={handleremove}  className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
       
       <span onClick={handledecreament} className=' cursor-pointer  text-4xl fill-current text-gray-600 w-3'>
         -
        </span>
         <input className="mx-2 border text-center w-8" type="text" value={cartQuantity}/>
       
       <span onClick={handledecreament} className='cursor-pointer text-4xl fill-current text-gray-600 w-3'>
          +
        </span>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${price* cartQuantity}</span>
    </div></div>
    )
  }
