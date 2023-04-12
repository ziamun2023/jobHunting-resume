//add data to local storage
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const addToData=(id)=>{
   
    // npm 

    let appliedcart={}

    const storedata=localStorage.getItem('applied-cart')
    if(storedata){
        appliedcart=JSON.parse(storedata)
    }

    // add quantity 
const quantity=appliedcart[id]
if(quantity){
const   newquantity=quantity+1
if(newquantity===2){

    toast("already added");
// appliedcart[id]=newquantity
}}
    else{
        appliedcart[id]=1
       
    }
        


localStorage.setItem('applied-cart',JSON.stringify(appliedcart))


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





const getstoredcart=()=>{ 
let appliedcart={}
    
    const storedata=localStorage.getItem('applied-cart')
    if(storedata){
        appliedcart=JSON.parse(storedata)
    }
return  appliedcart

}   
export {addToData,getstoredcart}