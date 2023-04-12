import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './components/blog/Blogs';
import AppliedJob from './components/appliedJob/AppliedJob';
import ErrorHandle from './components/error/ErrorHandle';
import Home from './components/home/Home';
import Statistics from './components/statistic/Statistics';
import JobDetails from './components/jobcart/JobDetails';
import Spinner from './loaderSpinner/Spinner';
import Remote from './components/appliedJob/Remote';
import Login from './components/login/Login';
import Banner from './components/banner/Banner';
import Banner2 from './components/banner/Banner2';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorHandle/>, 
    children:[{
      path:'/',
      element:<Home/>,
      loader:()=>fetch('/Jobdetail.json')
    },
    {
      path:'/home',
      element:<Home/>,
      loader:()=>fetch('/Jobdetail.json')
    

    },
    {
      path:'/blog',
      element:<Blogs/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/loaderSpinner',
      element:<Spinner/>
    },
    {
      path:'/banner',
      element:<Banner/>
    },
    {
      path:'/banner2',
      element:<Banner2/>
    },
    
    {
      path:'/statistic',
      element:<Statistics/>
    },
    {
      path:'/appliedJob',
      element:<AppliedJob/>,
      loader:()=>fetch('/Jobdetail.json')
        },
    {
      path:'/jobDetails/:jobid',
    element:<JobDetails/> ,
    loader:()=>fetch('/Jobdetail.json')
    },
    {
      path:'/remote',
    element:<Remote/> 
 
    },
    {
      path:'/*',
      element:<Home/>

    },
    {
      path:'/*',
      element:<ErrorHandle/>

    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
