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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorHandle/>, 
    children:[{
      path:'/Home',
      element:<Home/>
    },
    {
      path:'/blog',
      element:<Blogs/>
    },
    {
      path:'/statistic',
      element:<Statistics/>
    },
    {
      path:'/appliedJob',
      element:<AppliedJob/>
    },]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
