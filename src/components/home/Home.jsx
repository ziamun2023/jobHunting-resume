import React, { useState } from 'react';
import { Link, useLoaderData, useParams ,useNavigation} from 'react-router-dom';
import JobsCart from '../jobcart/JobsCart';
import JobDetails from '../jobcart/JobDetails';
import Spinner from '../../loaderSpinner/Spinner';



const Home = () => {
  const navigation = useNavigation()
 
  if (navigation.state === 'loading') {
    return <Spinner />
  }

  const alldata=useLoaderData()
  // console.log(alldata)


// const [first, setFirst]=useState([])


// console.log(first)

  // const handleDetails=(id)=>{
   
    
  // }



     

  


  const jobdetail=useLoaderData()

  let fouritem=jobdetail.slice(4)

  
  const [show, setShow]=useState(fouritem)

  const handleShowMore=()=>{
    setShow(jobdetail)
  }


  // {
  //   const array=[]
  //   jobdetail.map(item=>array.push(item))
  // const fourpiece=array.slice(4)

  // }
   
    
// }
 


  return (
        <div className=''>
       <section>
       <div className=' grid lg:grid-cols-2 mx-16 relative  adjustmargin'>
  
  <div  data-aos="zoom-in"  className='mt-20 ms-28'>
<p className='text-6xl text-left font-semibold '>As you look for your own dream job, consider what’s <span className='text-blue-400'>trending. </span></p>
<p className='text-left pt-7'> <span> Job<span className='text-blue-600'>Net</span>worx</span> helps you 10x your chances of getting your dream job while increasing your lifetime salary by $200,000 and more (so that YOU can live the life you've always dreamed of)..</p>
<Link to='/login'>
<p className='text-start'> <button className='bg-blue-400    hover:bg-blue-500 px-8 py-2 mt-8 font text-lg text-white '>Log In</button></p> </Link>
  </div>
   <div  data-aos="fade-left" className='my-auto ms-8  p-6'  >
 <img className='rounded-xl shadow-2xl' src="/picture01.jpg" alt="" />
  
  </div>


  </div>
       </section>
       <section>

        <p data-aos="zoom-in" className='font-medium text-4xl '>Job Catagory</p>
        <div data-aos="zoom-in" className='mx-36 mt-14 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 xs:grid-cols-1 '>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="/public/picture.jpg" alt="" /></div>
<div className='border rounded-2xl '>
 <div className='flex'>
 <div >
  <img className='w-10 m-2' src="/public/engineering-clipart-engineer-cap-12.png" alt="" />
  </div>
  <div >
  <p className='text-black text-left  font-medium p-2'>Engineering Job</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
  </div>
 </div>
</div>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="/public/picture5.jpg" alt="" /></div>
<div className='flex'>
  <div >
<img className='w-10 m-2' src="/public/accounting-icon-png-5.png" alt="" />
  </div>
  <div>
  <p className='text-black text-left  font-medium p-2'>Accounts and Finance</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
  </div>
</div>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="/picture7.jpg" alt="" /></div>
<div className='flex'>
  <div>
<img  className='w-10 m-2' src="/public/R.png" alt="" />
  </div>
  <div>
  <p className='text-black text-left  font-medium p-2'>Creative</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
  </div>
</div>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="/picture6.jpg" alt="" /></div>
<div className='flex'>
  <div>
    <img className='w-10 m-2' src="/public/R (1).png" alt="" />
  </div>
  <div>
  <p className='text-black text-left  font-medium p-2'>Marketing and sales
</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
  </div>
</div>
</div>
        </div>
       </section>

       {/* featured */}
       <section>
       <p data-aos="zoom-in" className='font-medium text-4xl my-16'>Featured Job</p>
       <div    data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mx-28' >

        {
         show.map(item=><JobsCart key={item.id}  jobs={item}></JobsCart>)
        }
       </div>
       
{

show.length===4? <button   className='bg-blue-800 text-white text-2xl font-semibold py-2 rounded-md shadow-lg my-6 px-4' onClick={handleShowMore}> show more</button>: null


}  

       </section>


  
      
      </div>
    );
;}

export default Home;
// handleDetails={handleDetails}  

// 