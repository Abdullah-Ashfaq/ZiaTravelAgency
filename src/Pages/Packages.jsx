import React, { useState, useEffect} from 'react'
import Navbar from '../component/Navbar'
import Services from "../component/Services"
import Footer from "../component/Footer"
import "../css/Packages.css"
import { MenuItem, TextField } from '@mui/material'
import axios from 'axios'

const Packages = () => {
  const [filterPackage, setFilterPackage] = useState('All')
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])

  const handleSelectChange = (event) => {
    const value = event.target.value
    setFilterPackage(value)
    if (value === 'All') {
      setFilterData(data)
    } else {
      const filtered = data.filter(item => item.category === value)
      setFilterData(filtered)
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://63f157ed5703e063fa560d2c.mockapi.io/packages`);
      setData(response.data)
    } catch (error) {
      console.log("Error while fetching the packages from an api")
    }
  }

  useEffect(() => {
    fetchData(); 
  }, [])

  useEffect(() => {
    if (filterPackage === 'All') {
      setFilterData(data)
    } else {
      const filtered = data.filter(item => item.category === filterPackage)
      setFilterData(filtered)
    }
  }, [data, filterPackage])

  return (
    <>
      <Navbar />
      <div className="main">
        <div style={{marginTop:"1px"}}></div>
        <Services name = "packages"/>
        <div className="packages">
          <div className="package-header">
            <TextField
              value={filterPackage}
              variant="outlined"
              size='small'
              label='Filter'
              select
              sx={{
                width:'220px',
                color:'green'
              }}
              onChange={handleSelectChange}>
              <MenuItem value='Hajj'>Hajj</MenuItem>
              <MenuItem value='Umrah'>Umrah</MenuItem>
              <MenuItem value='visit'>Visit</MenuItem>
              <MenuItem value='Ziyarat'>Ziyarat</MenuItem>
              <MenuItem value='All'>All</MenuItem>
            </TextField>
          </div>
          <div className="packages-container">
            {filterData.map((val) => (
              <div className="package" key={val.id}>
                <div className="package-top">
                  <div className="text"><span>Category:</span> {` ${val.category}`}</div>
                  <div className="text"><span>Country:</span>{` ${val.country}`}</div>
                  <div className="text"><span>Duration:</span>{` ${val.duration}`}</div>
                  <div className="text"><span>Price:</span>{` ${val.price}`}</div>
                </div>
                <div className="text"><span>About:</span>{`  ${val.about}`}</div>
                {/* <img className='package-img' src={val.file} alt="" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Packages
