import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../common/UI/Card'
import { fetchProduct } from '../utils/productReducer/productReducer'
import {AppDispatch} from '../utils/Store/store'
import { AppState} from '../utils/types/types'

export const ProductDispay = () => {

    const productData=useSelector((state:AppState)=>state.productReducer)
    const dispatch=useDispatch<AppDispatch>()
      useEffect(() => {
      dispatch(fetchProduct()) 
      
     }, [])

  return (
    <div className='container mx-auto  '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 p-4 '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}
