import React, { useEffect, useState } from 'react';
import { useParams ,useLoaderData,useNavigation } from 'react-router-dom';
import { addToData } from '../../utils/fakeDB';

import { CurrencyDollarIcon, CalendarIcon,PhoneIcon, DocumentTextIcon, MapPinIcon } from '@heroicons/react/24/solid'  
import Spinner from '../../loaderSpinner/Spinner';


const JobDetails = () => {
    const navigation = useNavigation()
  console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <Spinner />
  }
    const handleCartAdd=(id)=>{
        addToData(id)
    }



    const {jobid}=useParams()
    const value=jobid
    console.log(value)

    
    
       
    
   
  



    const  [job,setJob]=useState({})
    // {
    //    const found= jobs.find(pov=>pov.id===value)
    //    console.log(found)
    // }
    // console.log(job)

    useEffect(()=>{
        fetch('/Jobdetail.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const jobdatafound=data.find((items)=>items.id==value)
            setJob(jobdatafound)
          
        })
    },[])
    const {companyLogo ,jobTitle, companyName, remoteOrOnsite,experiences,educationalRequirements,jobResponsibility, location,jobDescription ,phone,email,id,salary, fulltimeOrParttime}=job
  

  

    // const data2=useLoaderData()
   
    // const [datas,setDatas]=useState()


    // const job=fetchedIndiviData.find(itemss=>itemss.id===Number(jobid))
    
 
    return (

      
       <div >
        {/* job detail header */}

        <section  className='h-60 bg-white text-center '>
        <p className='p-24 text-4xl font-bold'>Job Detail</p>
        </section>
        <section className='grid grid-cols-3 gap-6 my-4'>
            
       
           <div className='col-span-2 text-left '> <p className='my-3 '><b>Job description :</b><span className='text-slate-600'>{jobDescription}</span></p>
           <p  className='my-3 '><b>Job responsibility :</b><span className='text-slate-600'>{jobResponsibility}</span></p>
           <p  className='my-3 '><b>Education requirements :</b></p>
           <p  className='my-3 '><span className='text-slate-600'>{educationalRequirements}</span></p>
           <p  className='my-3 '><b>Experience :</b></p>
           <p  className='my-3 '><span className='text-slate-600'>{experiences}</span></p>
           
           
           
           </div>
        
         <div>

         <div className='border-2 py-6 rounded-md'>
        <p className='text-left font-bold ps-3'>Job Details</p>
      <p className='text-center'>  <hr className='w-9/12 ms-10 border-1.5 my-3' /></p>
     
    <div  className='flex mt-2 ps-2'>  <CurrencyDollarIcon className='w-5 me-2  text-blue-600' /> <p className='text-base font-semibold  text-stone-600'> Salary : <span className='text-slate-600 font-thin'>{salary}</span></p></div>
    <div  className='flex mt-2 ps-2'>  <CalendarIcon className='w-5 me-2  text-blue-600' /> <p className='text-base font-semibold  text-stone-600'> Job Title :  <span className='text-slate-600 font-thin'>{jobTitle}</span></p></div>
    <p className='text-left font-bold pt-10 ps-3'>Contact Information</p>
       <p className='text-center'>  <hr className='w-9 me-2/12 ms-10 border-1.5 my-3' /></p>

    <div  className='flex mt-2 ps-2'>  <PhoneIcon className='w-5 me-2  text-blue-600' /> <p className='text-base font-semibold  text-stone-600'> Phone:  <span className='text-slate-600 font-thin'>{phone}</span></p></div>
    <div  className='flex mt-2 ps-2'>  <DocumentTextIcon className='w-5 me-2  text-blue-600' /> <p className='text-base font-semibold  text-stone-600'> Email : <span className='text-slate-600 font-thin'>{email}</span></p></div>
    <div  className='flex mt-2 ps-2'>  <MapPinIcon className='w-5 me-2  text-blue-600' /> <p className='text-base font-semibold  text-stone-600'> Address :  <span className='text-slate-600 font-thin'>{location}</span></p></div>

 
    

    

    </div>
    <button onClick={()=>handleCartAdd(id)} className='design w-full font-semibold my-6 py-4 rounded-md'> Apply now</button>
         </div>
   

        </section>

       
       </div>
    );
};

export default JobDetails;

// const {companyLogo ,jobTitle, companyName, educationalRequirements,jobResponsibility,contactInformation,remoteOrOnsite,experiences, location ,id,salary, fulltimeOrParttime,jobDescription}=jobdetailsdata

// const {companyLogo ,jobTitle, companyName, educationalRequirements,jobResponsibility,contactInformation,remoteOrOnsite,experiences, location ,id,salary, fulltimeOrParttime,jobDescription}=fetchedIndiviData