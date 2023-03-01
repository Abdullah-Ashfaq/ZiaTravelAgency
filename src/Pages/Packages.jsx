import React, { useState, useEffect} from 'react'
import Navbar from '../component/Navbar'
import Services from "../component/Services"
import Footer from "../component/Footer"
import "../css/Packages.css"
import { MenuItem, TextField } from '@mui/material'
import axios from 'axios'





const Packages = () => {
  const[filterPackage, setFilterPacakge] = useState('All')
  const [data, setData] = useState([])
 
  
 
     const fetchData = async () => {
      try {
        const response = await axios.get(`https://63f157ed5703e063fa560d2c.mockapi.io/packages`);
        setData(response.data)
        console.log(data)
        
      } catch (error) {
        console.log("Error while fetching the packages from an api")
      }
      
    }
 
  
useEffect(() => {
  fetchData(); 
}, [])
  return (
    <>
    <Navbar></Navbar>
    <div className="main">

      <div style={{marginTop:"1px"}}></div>

    {/* calling the Service component with the prop */}
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
          onChange={(event) => setFilterPacakge(event.target.value) }>
            
            <MenuItem value = 'Hajjandumrah'>Hajj & Umrah</MenuItem>
            <MenuItem value = 'dubai'>Dubai</MenuItem>
            <MenuItem value = 'iran'>Iran</MenuItem>
            <MenuItem value = 'iraq'>Iraq</MenuItem>
            <MenuItem value = 'thailand'>Thailand</MenuItem>
            <MenuItem value = 'malaysia'>Malaysia</MenuItem>
            <MenuItem value = 'All'>All</MenuItem>
            
          </TextField>
          
        </div>
        <div className="packages-container">
          {
            data.map((val) => {
              return (
                <div className="package" key={val.id}>
                <div className="package-top">
                  <div className="text"><span>Category:</span> {` ${val.category}`}</div>
                  <div className="text"><span>Country:</span>{` ${val.country}`}</div>
                  <div className="text"><span>Duration:</span>{` ${val.duration}`}</div>
                  <div className="text"><span>Price:</span>{` ${val.price}`}</div>
                </div>
    
                <div className="text"><span>About:</span>{`  ${val.about}`}</div>
                <img className='package-img' src={val.file} alt="" />
    
              </div>

              )
              
             
            
            
            })
          }
        
          
        </div>

      </div>

      </div>
      <Footer />
    
    
    </>
  )
}

export default Packages