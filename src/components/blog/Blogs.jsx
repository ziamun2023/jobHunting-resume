import React from 'react';
import Banner2 from '../banner/Banner2';

const Blogs = () => {
    return (
        <div >
        {/* job detail header */}

        <section    className=' bg-white text-center absolute top-0 -z-10 left-0'>
       <Banner2/>
      
        </section>
        <section data-aos="zoom-in-down" className='  mt-80 mx-16 my-10' >
        
        
        
          <ol className='text-2xl' style={{ listStyleType: 'circle' }}>
          <li className='font-semibold text-start my-6'>When should you use context API?</li>
          <p className='text-start  text-slate-600'>Whenever we try to pass any value ,property or function from parent component to child component have to go through many component by props drilling to pass the value to required destination  .There is a simple way to do the same in an efficient way using context API .By Creating context api it gives two componenet , context provider which provide the value which needs to be passed and another is context consumer where it receives the value from provider, thus it saves time and keeps the website run faster.     </p>

          <li  className='font-semibold text-start my-6'>What is a custom hook?</li>
       <p className='text-start text-slate-600' >   A custom hook is a JavaScript funtion which has reusable functionality and its name starts with use . We can create any logic only once then use it in many componenet multiple times. We can use default react Hooks in custom hooks.</p>
            <li  className='font-semibold text-start my-6'>What is useRef?</li>
          <p className='text-start text-slate-600'>  To avoid re-render in an infinite loop by holding a mutable value .It also helps accessing DOM elements and can track previous state value.</p>
            <li  className='font-semibold text-start my-6'>What is useMemo?</li>
        <p className='text-start text-slate-600'>  useMemo is used  To make a website more faster by stopping unnecessary re-rendering process in react componenet .Using of useMemo can increase the perfomance but over uses of useMemo can also cause lagging as it consumes more memoery.</p>
 
          </ol>

      
         
    

        </section>

       
       </div>
    );
};

export default Blogs;