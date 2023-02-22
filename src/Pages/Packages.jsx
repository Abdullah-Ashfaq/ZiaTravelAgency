import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Services from "../component/Services"
import Footer from "../component/Footer"
import "../css/Packages.css"
import { MenuItem, TextField } from '@mui/material'


const Packages = () => {
  const[filterPackage, setFilterPacakge] = useState('All')
 
  return (
    <>
    <Navbar></Navbar>
    <div className="main">

      <div style={{marginTop:"1px"}}></div>

      <Services name = "packages"/>

      <div className="packages">

        <div className="package-header">

          <TextField
          value={filterPackage}
          variant="outlined"
          // color="primary"
          size='small'
          label = 'Filter'
          select
          sx={{
            width:'220px',
            color:'green'
            
        }}
          onChange={(event) => setFilterPacakge(event.target.value) }
          
          
          >
            <MenuItem value = 'Hajjandumrah'>Hajj & Umrah</MenuItem>
            <MenuItem value = 'dubai'>Dubai</MenuItem>
            <MenuItem value = 'iran'>Iran</MenuItem>
            <MenuItem value = 'iraq'>Iraq</MenuItem>
            <MenuItem value = 'thailand'>Thailand</MenuItem>
            <MenuItem value = 'malaysia'>Malaysia</MenuItem>
            <MenuItem value = 'All'>All</MenuItem>
            
          </TextField>
          
        </div>

      </div>

      </div>
      <Footer />
    
    
    </>
  )
}

export default Packages