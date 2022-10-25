
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategory } from '../utils/categoryReducer/categoryReducer'
import { AppDispatch } from '../utils/Store/store'
import { AppState} from '../utils/types/types'
import { Navigation } from './Navigation'

export const Sidebar = () => {


  const categoryData=useSelector((state:AppState)=>state.categoryReducer)
  
  const dispatch=useDispatch<AppDispatch>()
  
  useEffect(() => {
    dispatch(fetchCategory()) 
    
   }, [])
   
  return (
    <div className='sidebar bg-cyan-500 text-white'>
      
    </div>
  )
}
