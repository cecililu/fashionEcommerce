import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

export const SignIn = () => {
    let schema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required(),
     })


   const formik = useFormik({
      initialValues: {
      email: '',
      password: ''},
      
      onSubmit: values => {
        
        alert(JSON.stringify(values, null, 2));
      },
      validationSchema:schema 
     })
 
  return (
    <><section className="h-screen">
    <div className="px-6 h-full text-gray-800 flex justify-center mt-12">
     
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form  onSubmit={formik.handleSubmit}>
              <p className="text-center  mx-4 text-2xl my-10">Sign In to Shop Now !</p>
 
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                placeholder="Email address"
                onChange={formik.handleChange}
                
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                
              />
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
          </form>
        </div>
        </div>
  </section></>
  )
}
