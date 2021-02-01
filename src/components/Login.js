import React from 'react';
import Image from './image.png';
import { Formik,Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import Navbar from './Navbar';

export default function login(){
    const validate = Yup.object({
        email:Yup.string()
             .email('email is invalid')
             .required('email is required'),
        password:Yup.string()
             .min(6, 'Password must be at least')
             .required('Password is required'),
      })  
    return (
        <div >
            <Navbar />
             <Formik
          initialValues={{
            email:'',
            password:'',
          }}
          validationSchema={validate}
          >
         {formik => (
             
            <div className="flex w-full justify-between px-8">
                <div className=" hidden md:block">
                <img src={Image} className="block md:block justify-self-start sm:hidden " alt=""/>  
               </div> 
               <div className="">
               <section>
            <h1 className="text-gray-600 py-6 text-2xl">Welcome Back !</h1>
            <p className="text-xs py-6 pt-2">You  have  been registerd  on Barefoot-nomad .Please login with your email and password</p>
                </section>
                <section className="mt-10">
              {console.log(formik.values)}
              <Form>
              <div className="py-6">
              <TextField label="email" name="email" type="text" />
              
              <TextField label="password" name="password" type="password" />
              </div>
              <div className="py-6">
              <button className="bg-purple-600 text-white justify-center w-full h-8 rounded" type="submit">login</button>
              </div>
              <div className="flex justify-end text-purple-600 py-6 text-sm hover:text-purple-700 hover:underline hover:cursor-pointer mb-6">
                        forgot password ?
                        </div>
                        <div className="space-y-5">
                        <div className="border border-blue-500 rounded">
                        <i className="fa fa-google px-9"></i>
                        sign in with google
                        </div>
                        <div className="bg-blue-500 text-white">
                    <i className="fa fa-facebook px-9"></i>
                        sign in with facebook
                        </div>
                        </div>   
              </Form> 
              </section>
              </div>
            </div>
          )}
            </Formik>
        </div>
    )
}
