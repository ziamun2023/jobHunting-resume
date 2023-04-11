//add data to local storage

import { useState } from "react"
import AppliedJob from "../components/appliedJob/AppliedJob"

const addToData=(id)=>{
    const quantity=localStorage.getItem(id);
    if (quantity){
const newquantity=parseInt(quantity)+1;

if(newquantity===2)
{alert('already exist')}

    }
    else{
        localStorage.setItem(id,1)
    }







    
// let added={}


// const [store,setStore]=useState({added})

// const preiouslyAdded=localStorage.getItem("applied-job")
// if(preiouslyAdded){
//     console.log('already exist')
// }
// else{
//     setStore(...store,added[AppliedJob]=id)
// }
// localStorage.setItem(added)
// // const  value=added[id]
// // if(added)
// // localStorage.setItem('applied-job',id)
}
export {addToData}