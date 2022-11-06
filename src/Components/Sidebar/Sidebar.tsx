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
  
  let categoryList:any;
  useEffect(() => {
    dispatch(fetchCategory()) 
    
   }, [])
  if(categoryData.data){
     categoryList=categoryData.data.map((data)=>{
      return (
      <div className=' border-3 border-white p-3 py-5 cursor hover:bg-cyan-400'>
         {data}
      </div>)
    })
  }

  return (
    <div className='sidebar bg-cyan-300 text-white invisible md:visible'>
      {categoryList} 
    </div>
  )
}