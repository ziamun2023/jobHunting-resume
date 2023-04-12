
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { BoltIcon,Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'  



const Header = () => {
  const [IsMenuOpen,setIsMenuOpen]=useState(false)
  return (
   <div className='adjustmargin px-4 py-5 mx-auto md:px-24 lg:px-8'  >
         <div className='relative flex space-x-6 m-4 pr-8 justify-between'>
      
      <Link to ='/' className='flex'>
        <BoltIcon className="h-6 w-6 text-blue-500" />
        <span> Job<span className='text-blue-600'>Net</span>worx</span>
          
          </Link> 


       <ul className='item-center hidden space-x-8 lg:flex text-lg font-medium bg-blue-200 rounded-md absolute  left-72 pe-10'>
       <li  className='hover:text-xl hover:bg-white rounded-md -me-3 p-3 duration-200'>
        {/* <input onChange={changing} type="text" /> <Link to={`search/:${params.description}`}><button onClick={searchforproducts}> search</button></Link> */}
                  {/* <NavLink to='/' className={({isActive})=> isActive? 'text-blue-600': 'default' }> home</NavLink> */}
              </li>
              <li className='hover:text-xl hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/home' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Home</NavLink>
              </li>
              <li className='hover:text-xl hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/appliedJob' className={({isActive})=> isActive? 'text-blue-600': 'default' }>Applied Job </NavLink>
              </li>
              <li className='hover:text-xl hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/blog' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Blogs</NavLink>
              </li>
              <li className='hover:text-xl hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/statistic' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Statistic</NavLink>
              </li>
              <li className='hover:text-xl hover:bg-gray-200 rounded-md p-3 duration-200'>
                  <NavLink to='/login' className={({isActive})=> isActive? 'text-blue-600': 'default' }> login</NavLink>
              </li>
             
              </ul>
              <div className='lg:hidden'>
                  <button onClick={()=> setIsMenuOpen(true)}>
                  <Bars3Icon className='w-5 text-gray-600' />


                  </button>
                  {IsMenuOpen && 
                  <div className='absolute top-0 left-0 w-full z-10 '>
                      <div className='p-5 bg-white border rounded shadow-sm '>
                          <div className='flex items-center justify-between mb-4'>
                          <div>
                  <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className='h-6 w-6 text-blue-500' />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                     company name
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label='Close Menu'
                    title='Close Menu'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className='w-5 text-gray-600' />
                  </button>
                </div>
                          </div>
                          <nav>
                <ul className='space-y-4'>
                  <li>
                    <Link to='/Home' className='default'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/blog'
                      className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                    >
                     Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/appliedJob'
                      className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                    >
                     Applied Job
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/statistic'
                      className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                    >
                  Statistic
                    </Link>
                  </li>
               
                </ul>
              </nav>
                      </div>
                      
                  </div>}
                  
                  </div> </div>
   </div>
     
  );
};

export default Header;