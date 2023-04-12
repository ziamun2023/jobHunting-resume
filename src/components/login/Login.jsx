import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/68312-login.json";

        

const Login = () => {
    return (
        <div  data-aos="zoom-in-down" className='grid lg:grid-cols-2 pt-6 pb-12 m-10 mx-32'>
        <div  className='mt-20 bg-blue-50 rounded-lg'>
     <p className='text-6xl text-center '>Login</p>
     <p className='text-left pt-7 text-center'><input className='bg-white text-4xl p-2 rounded-lg' type="text" placeholder='Username' /></p>
     <p className='text-left pt-7 text-center'><input className='bg-white text-4xl p-2 rounded-lg' type="text" placeholder='Password' /></p>
     <div>
        <button className='bg-green-200 mt-8 text-3xl p-2 rounded-lg'>Log in </button> 
     </div>
     <p className=' hover:text-blue-700 text-2xl mt-3'> sign up </p>
  
        </div>
        <div className='animate3'>
      
         <Lottie  animationData={groovyWalkAnimation} loop={true} />;
        
       
        </div>
     
        </div>
    );
};

export default Login;