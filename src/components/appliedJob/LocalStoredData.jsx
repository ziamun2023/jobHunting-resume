import React from 'react';
import {  MapIcon, CurrencyDollarIcon  } from '@heroicons/react/24/solid' 
import { Link } from 'react-router-dom';

const LocalStoredData = ({item}) => {

        
    const {companyLogo ,jobTitle, companyName, remoteOrOnsite,experiences,educationalRequirements,jobResponsibility, location,jobDescription ,phone,email,id,salary, fulltimeOrParttime}=item
    console.log(item)
    return (
        <div> 
   
       <section  data-aos="fade-right" className=' relative '>
           <div className='flex border my-6 rounded-md shadow-md hover:-translate-y-2 duration-300 '>
           <div className='w-28 ps-10 pt-4 '>
              <img src={item.companyLogo} alt="" />

           </div>

           <div className='ps-28'>
           <p className='font-semibold text-left'> {jobTitle}</p>
            <p className='text-left font-lightbold text-gray-600'>{companyName}</p>
            <div className='flex gap-4'>
                <p className='border-2 border-blue-600 rounded-sm px-3'>{remoteOrOnsite}</p>
                <p className='border-2 border-blue-600  rounded-sm px-3'>{fulltimeOrParttime}</p>
              
            </div>
          <div className='flex my-4'>
          <MapIcon className="h-6 w-6 text-blue-500" />    <p className='text-left ps-2 pe-6 font-lightbold text-gray-600'>
           {location}

                </p>
                <CurrencyDollarIcon className="h-6 w-6  text-blue-500" />  
                <p>{salary}</p>
          </div>
               
           </div>
           <div className='absolute right-28 top-8'>
           <div className='design w-20 rounded-md text-white'> <Link to={`/jobDetails/${id}`}> details</Link></div>
               
           </div>
           </div>

       </section>
   </div>
    );
};

export default LocalStoredData;