import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card } from '../common/UI/Card'
import { fetchProductDetail } from '../utils/productDetailReducer/productDetailReducer'

import {AppDispatch} from '../utils/Store/store'
import { AppState} from '../utils/types/types'

   
export const ProductDetailPage = () => {
    let {userId}=useParams()  
    const dispatch=useDispatch<AppDispatch>()
    const productData=useSelector((state:AppState)=>state.productDetailReducer)
    
    useEffect(() => {
        dispatch(fetchProductDetail({userId})) 
       }, [])
  return (
    <section className="max-h-full pb-20 px-20 ml-20">
    <div className="px-6  text-gray-800 flex justify-center mt-12 mx-auto border lg:p-25">
      <div className="sm:grid grid-cols-1 lg:grid-cols-5 gap-2  mx-auto mt-10 border">
        <img alt={productData.data['image']} className="lg:w-full mx-auto h-96 lg:h-full object-contain col-span-1 lg:col-span-1" src={productData.data['image']}/>
        <div className="py-10 px-20 col-span-1 lg:col-span-3 mx-auto">
          <h2 className="text-sm title-font text-gray-500 tracking-widest mt-10">{productData.data['category']}</h2>
          <div className='grid-cols-1 '>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productData.data['title']}</h1> 
          <p className="leading-relaxed text-justify px-5 mt-5">{productData.data['description']}.</p>
          
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900 mx-5">${productData.data['price']}</span>
            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to cart</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}
