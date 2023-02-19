import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'
import Services from '../component/Services'
import About from '../component/About'

const Home = () => {
  const navigate = useNavigate()
  return (
   <>
   <Navbar />
   <div className="main">
    <div className="header">
      <div className="header-info">
       <div className="header-text">
        Your Journey
       </div>
       <button className="header-btn" onClick={() => navigate("/packages")}>Just One Click Away</button>

      </div>
    </div>
    <Services name = "services" />
    <About />
    
   </div>
   <Footer/>
   
 
   
   
   
   
   </>
  )
}

export default Home