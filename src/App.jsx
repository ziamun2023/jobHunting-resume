import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {
 

  return (
    <div className="App">
     
     <Header></Header>
     <div>
      <Outlet/>
     </div>
     <Footer></Footer>
    </div>
  )
}

export default App
