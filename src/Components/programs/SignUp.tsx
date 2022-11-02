import React from 'react'
import * as yup from 'yup';
import axios from 'axios';



import { useFormik } from 'formik';
export const SignUp = () => {

  let schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
   })
 
  const formik = useFormik({
    initialValues: {
    fullName:'',
    email: '',
    password: '',
    confirm_password:''
  },
    
    onSubmit: async(values) => {
     const res=await axios.post('https://reqres.in/api/login.com',values)
    },
    validationSchema:schema 
   })
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800 flex justify-center mt-12">
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="mt-8 mb-8 text-2xl text-center">Sign up to shop with us Now!</h1>
            
            <div className="mb-6">
            <input 
                type="text"
                className="form-control block w-full px-4 py-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="fullname"
                placeholder="Full Name" onChange={formik.handleChange} />
                </div>
            
            <div className="mb-6">
            <input 
                type="text"
                className="form-control block w-full px-4 py-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                placeholder="Email"  onChange={formik.handleChange}/>
            </div>

            <div className="mb-6">
            <input 
                type="password"
                className="form-control block w-full px-4 py-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                placeholder="Password" />
            </div>

            <div className="mb-6">
            <input 
                type="password"
                className="form-control block w-full px-4 py-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="confirm_password"
                placeholder="Confirm Password" onChange={formik.handleChange}/>
              </div >  

            <div className="text-center text-sm text-grey-dark  my-2">
                By signing up, you agree to the 
                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Terms of Service
                </a> and 
                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Privacy Policy
                </a>
                
            </div>
            <button 
                type="submit"
                className=" my-5 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Sign Up
              </button>

              <div className="text-grey-dark mt-6">
            Already have an account? 
            <a className="no-underline border-b border-blue text-blue" href="../login/">
                Log in
            </a>.
        </div>
        </div>
         
        
    </div>
</section>
  )
}
