import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export const SignIn = () => {
    
      let schema = yup.object().shape({
      email:  yup.string().email().required(),
      password: yup.string().required(),
     })
   
  
     
 
  return (
     
    <section className="mb-10">
    <div className="mb-10 px-6 h-full text-gray-800 flex justify-center mt-12">
      
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <Formik
            initialValues= {{ email: '', password: ''}}
            
            onSubmit={ async(values) => {
              console.log("submitted")
            const res=await axios.post('https://reqres.in/api/login.com',values)
            }}
            validationSchema={schema} 
          >
          {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) =>  
          <form  onSubmit={handleSubmit}>
              <p className="text-center  mx-4 text-2xl my-10">Sign In to Shop Now !</p>
 
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                placeholder="Email address"
                onChange={handleChange}
               
              />
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
			        {errors.email  ?errors.email: ''}
	   	        </span>
          
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                
                
              />
               <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
			        {errors.password}
	   	        </span>
            </div>
  
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                  >Remember me</label
                >
              </div>
              <a href="#!" className="text-gray-800">Forgot password?</a>
            </div>
  
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
                <a
                  href="#!"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Register</a>
              </p>
            </div>
          </form>}
        </Formik>
        </div>
        </div>
  </section>
  )
}
