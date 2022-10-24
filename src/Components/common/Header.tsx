import React from 'react'
import { Head } from './Head'
import { NavBar } from './NavBar'
import { Search } from './Search'

export const Header = () => {
  return (
   <>
   <Head/>
   <Search/>
   <NavBar/>
   </>
  )
}
