import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
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
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="../../../public/pexels-sora-shimazaki-5669648 (1).jpg" alt="" /></div>
<p className='text-black text-left  font-medium p-2'>Engineering Job</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="../../../public/pexels-sora-shimazaki-5669648 (1).jpg" alt="" /></div>
<p className='text-black text-left  font-medium p-2'>Engineering Job</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="../../../public/pexels-sora-shimazaki-5669648 (1).jpg" alt="" /></div>
<p className='text-black text-left  font-medium p-2'>Engineering Job</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
</div>
<div className='border rounded-2xl '>
<div className='m-2 shadow-lg rounded-2xl'><img className='rounded-2xl ' src="../../../public/pexels-sora-shimazaki-5669648 (1).jpg" alt="" /></div>
<p className='text-black text-left  font-medium p-2'>Engineering Job</p>
<p className='text-gray-400  text-left p-2'>300 job available</p>
</div>
        </div>
       </section>
  
       {/* <div className='bg-black w-full  h-48 text-white relative  '> <p className='text'>&copy; all rights reserved   SHopsense </p> <p className='p-4'>Contact: +9908665234 <br /> address: 11th street , roadcity , xyCountry <br /> email: shopsense334@gmai.com </p>  </div> */}
      </div>
    );
};

export default Home;