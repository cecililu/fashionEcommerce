import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../common/UI/Card'
import { fetchProduct } from '../utils/productReducer/productReducer'
import {AppDispatch} from '../utils/Store/store'
import { AppState} from '../utils/types/types'

export const ProductDisplay = () => {

   
    const dispatch=useDispatch<AppDispatch>()
    const productData=useSelector((state:AppState)=>state.productReducer)
      
    useEffect(() => {
      dispatch(fetchProduct()) 
     }, [])
    
     const productList=productData.data
     .map(data=>{
         return(
         <Card data={data}/>)
        })
  return (
    <div className='container mx-auto mt-12'>
        <div className='grid grid-cols-1 gap-10 my-4 p-4 mx-12 sm:grid-cols-2 lg:grid-cols-4  '>
           {productList}
        </div>
    </div>
  )
}
