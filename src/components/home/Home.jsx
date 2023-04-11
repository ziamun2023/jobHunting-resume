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
        <div>
       <section>
       <div className=' grid lg:grid-cols-2 mx-16 relative '>
  
  <div  className='mt-20'>
<p className='text-6xl text-left font-semibold '>As you look for your own dream job, consider what’s <span className='text-blue-400'>trending. </span></p>
<p className='text-left pt-7'>If certainty is a core need for you, then Shopsense can meet that need perfectly Shopping is always there – there are always Shopsense to be shopped at. There’s never any concern that the shops won’t be there, or won’t be open, or won’t want to take your trade.</p>
<Link to='/'>
<p className='text-start'> <button className='bg-blue-400    hover:bg-blue-500 px-8 py-2 mt-8 font text-lg text-white '>Log In</button></p> </Link>
  </div>
   <div className='my-auto ms-2  p-6'  >
 <img className='rounded-xl shadow-2xl' src="/picture01.jpg" alt="" />
  
  </div>


  </div>
       </section>
       <section>

        <p className='font-medium text-4xl'>Job Catagory</p>
        <div className='mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 xs:grid-cols-1'>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="../../../public/picture.jpg" alt="" /></div>
<p className='text-black text-left  font-medium p-2'>Engineering Job</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="../../../public/picture5.jpg" alt="" /></div>
<p className='text-black text-left  font-medium p-2'>Accounts and Finance</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="../../../picture7.jpg" alt="" /></div>
<p className='text-black text-left  font-medium p-2'>Creative</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="../../../picture6.jpg" alt="" /></div>
<p className='text-black text-left  font-medium p-2'>Marketing and sales
</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
</div>
        </div>
       </section>

       {/* featured */}
       <section>
       <p className='font-medium text-4xl my-16'>Featured Job</p>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6' >

        {
         show.map(item=><JobsCart key={item.id}  jobs={item}></JobsCart>)
        }
       </div>
       
{

show.length===4? <button className='bg-blue-800 text-white text-2xl font-semibold py-2 rounded-md shadow-lg my-6 px-4' onClick={handleShowMore}> show more</button>: null


}  

       </section>


  
      
      </div>
    );
;}

export default Home;
// handleDetails={handleDetails}  

// 