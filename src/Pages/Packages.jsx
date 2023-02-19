import React from 'react'
import Navbar from '../component/Navbar'
import Services from "../component/Services"
import Footer from "../component/Footer"

const Packages = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="main">
      <div style={{marginTop:"1px"}}></div>
      <Services name = "packages"/>
      <div style={{height:"100vh"}}></div>

      </div>
      <Footer />
    
    
    </>
  )
}

export default Packages