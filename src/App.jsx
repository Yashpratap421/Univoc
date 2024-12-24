import React from 'react'
import Dashboard from './Components/main/Dashboard'
import About from './Components/main/About'
import './App.css'
import Benefits from './Components/main/Benifites'
import Jobroles from './Components/main/Jobroles'
import Conatact from './Components/main/Conatact'
import Footer from './Components/footer/Footer'
// import Header from './Components/header/Header'

const App = () => {
  return (
   <div className="bg-[#e4e8f0] overflow-x-hidden">
    <Dashboard />
    <About />
    <Benefits />
    <Jobroles />
    <Conatact />
    <Footer />
   </div>
  )
}

export default App