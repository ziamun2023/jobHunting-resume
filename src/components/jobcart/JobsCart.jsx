import React from 'react';
import {  MapIcon, CurrencyDollarIcon  } from '@heroicons/react/24/solid' 
import { Link} from 'react-router-dom';

const JobsCart = ({jobs}) => {

   


    const {companyLogo ,jobTitle, companyName, remoteOrOnsite,experiences, location ,id,salary, fulltimeOrParttime}=jobs
    return (
        <div className='border grid grid-cols-1 rounded-lg p-4 shadow-md '>
            <div><img className='w-12' src={companyLogo} alt="" /></div>
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
          {/* <button   onClick={()=>navigate(`Jobdetail.json/${jobid}`)} className=' font-semibold p-2 m-4 w-16 angled-gradient rounded-sm'> Details </button> */}
         <div className='design w-20 rounded-md text-white'> <Link to={`/jobDetails/${id}`}> details</Link></div>
        </div>
    );
};

export default JobsCart;
//
{/* */}
// onClick={()=>navigate(`Jobdetail.json/${id}`)}
// onClick={()=>handleDetails(id)}
// // 