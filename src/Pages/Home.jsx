import React from 'react'
import About from '../component/About'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  const navigate = useNavigate()
  return (
   <>
   <Navbar />
   <div className="main">
    <div className="header">
      <div className="header-info">
       <div className="header-text">
        Book Your Journey
       </div>
       <button className="header-btn" onClick={() => navigate("/packages")}>Just One Click Away</button>

      </div>
    </div>
    <About />
    <Footer/>
   </div>
   
 
   
   
   
   
   </>
  )
}

export default Home