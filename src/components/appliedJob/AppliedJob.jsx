import React, { useEffect } from 'react';
import { getstoredcart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import LocalStoredData from './LocalStoredData';

const AppliedJob = () => {

let finaldata=[]
    const [cart,setCart]=useState([])

  
    
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
},[pdata]
)

    return (
        <div>
              <section  className='h-60 bg-white text-center '>
   <p className='p-24 text-4xl font-bold'>Job applied</p>
   </section>
      
   <section>
       <label for="options">Select an option:</label>
<select id="options" onchange="optionSelected()">
<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
</select>


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
                cart.map(item=><LocalStoredData item={item}/>)
            }
        </div>
    );
};

export default AppliedJob;