import React from 'react'
import {Link} from "react-router-dom";

export const Head = () => {
  return (
    <>
    <section className="head">
    <div className="flex flex-row-reverse ">
        <Link to="/customercare">
        <div className='mx-4'>Customer Care</div>
        </Link>

        <Link to="/signin">
        <div className='mx-4'>Sign In </div>
        </Link>
        
        <Link to="/signup">
        <div className='mx-4'>Sign Up</div>
        </Link>
      </div>
    </section>
    </>
  )
}
