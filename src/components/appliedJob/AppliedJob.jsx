import React, { useEffect } from 'react';
import { getstoredcart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import LocalStoredData from './LocalStoredData';

const AppliedJob = () => {

const removeit=()=>{
  localStorage.removeItem("applied-cart")
  setCart([])
}   
// const refreshPage=()=>{
//     window.location.reload(false);
// }
   const [filterit,setFilterit]=useState()




    const [cart,setCart]=useState([])
    // remoteOrOnsite

    const filterRemote=()=> {
 
        const findit=filterit.filter(item=>item.remoteOrOnsite==="Remote")
        
        setCart(findit)


         
      } 

      const filterOnsite=()=>{
        // window.location.reload(false);
        const findit=filterit.filter(item=>item.remoteOrOnsite==="Onsite")
     
        setCart(findit)
         
      }
      const filterAll=()=>{
        // window.location.reload(false);
        const findit=filterit.map(item=>item)
     
        setCart(findit)
         
      }
  
    // const {companyLogo ,jobTitle, companyName, remoteOrOnsite,experiences,educationalRequirements,jobResponsibility, location,jobDescription ,phone,email,id,salary, fulltimeOrParttime}=data
  




    const pdata=useLoaderData()
    // console.log(pdata)
  
    // useEffect(()=>{
    //     const getstoreapplied=getstoredcart()
      

    //     console.log('1st',getstoreapplied)
    //     const newArr=[]
    //     for (const  id in getstoreapplied){
    //         const foundData=pdata.find(items=>items.id===id)
    //         console.log("2nd",foundData)
    //         if(foundData){
    //             const quanitity=getstoreapplied[id]
    //             foundData.quantity=quanitity
    //             console.log(foundData)
    //             newArr.push(foundData)
               
                
    //         }
    //     }
    //     setCart(newArr)
           
    // },[])
 
  
  
 


 
//   console.log(cart)


useEffect(()=>{


const store=getstoredcart()


const savedcart=[]
// console.log("alla",store)
for (const id in store){
   
  const getdata=pdata.find((gold)=>gold.id===parseInt(id))
  if(getdata){
    const quantity=store[id];
    getdata.quantity=quantity
    savedcart.push(getdata)

  }
   
}
setCart(savedcart)
setFilterit(savedcart)

},[pdata]
)

    return (
        <div>
              <section  className='h-60 bg-white text-center '>
   <p className='p-24 text-4xl font-bold'>Job applied</p>
   </section>


   
    
   
  
      
   <section className='text-end'>
   

<div className='mx-28  my-6'>
<button className='bg-blue-100 px-6 mx-2 rounded-md' onClick={()=>filterRemote()}> Filter Remote</button>
<button className='bg-blue-100 px-6 mx-2 rounded-md' onClick={()=>filterOnsite()}> Filter onsite </button>
<button className='bg-blue-100 px-6 mx-2 rounded-md' onClick={()=>filterAll()}> All </button>
<button className='bg-blue-100 px-6 mx-2 rounded-md' onClick={()=>removeit()}>remove all applied job</button>

</div>







       </section>
             {/* <section  className='h-60 bg-white text-center '>
        <p className='p-24 text-4xl font-bold'>Job applied</p>
        </section>
            <section>
            <label for="options">Select an option:</label>
<select id="options" onchange="optionSelected()">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>


            </section>
            <section className=''>
                <div className='flex'>
                <div>
                   

                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                </div>

            </section> */}


            {
                cart.map(item=><LocalStoredData key={item.id} item={item}/>)
            }
        </div>
    );
};

export default AppliedJob;