import React from 'react'
import Navbar from '../component/Navbar'
import Services from "../component/Services"
import Footer from "../component/Footer"
import "../css/Packages.css"

const Packages = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="main">
      <div style={{marginTop:"1px"}}></div>
      <Services name = "packages"/>
      <div className="packages">
        <div className="package-header">
          
        </div>

      </div>

      </div>
      <Footer />
    
    
    </>
  )
}

export default Packages