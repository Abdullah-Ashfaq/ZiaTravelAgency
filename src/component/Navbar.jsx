import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom'
import Contact from './Contact';
import '../css/Navbar.css'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen ] = useState(false)
    const [isContact, setIsContact] = useState(false)
    // const [isOpen , setIsOpen] = useState(false)
    const [scroll, setScroll] = useState(0);
    const closeContactForm = (value) => {
      setIsContact(value)

    }

    const menuRef = useRef(null);
   

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
       
      }, []);

      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false)
          
        }
      };
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      },[]);
      const handleScroll = () => {
        setScroll(window.pageYOffset);
      };
     

     
      const navbarStyle = {
        boxShadow: scroll > 50 ? "#A1F7F7 0px 4px 6px -1px, #A1F7F7 0px 2px 4px -1px" : "",
        // position: scroll > 50 ? "fixed" : ""
        
        
      };

  return (
    <>
    <div className="navbar" style={navbarStyle}>
        <img src="logo.jpg" alt="Agency-logo" className="logo" />
        <div className="links">
          <li className="link"><Link to={"/"} style = {{textDecoration:"none", color:"gray"}}>Home</Link></li>
          <li className="link"><Link to={"/packages"} style = {{textDecoration:"none", color:"gray"}}>Packages</Link></li>
          <li className="link">About</li>
          <li className="link" onClick={() => setIsContact(!isContact)}>Contact Us </li>
          
        </div>
        <div className="nav-btns">
            <IconButton style={{color: '#58D5D3'}}  onClick={() => setIsMenuOpen(!isMenuOpen) }>
                {
                    isMenuOpen ?  <CloseIcon /> : <MenuIcon />
                }
            </IconButton>


        </div>
        

       
    </div>

    <div className = {`side-nav ${isMenuOpen ? "open" : ""}`}>
    <div className="links side-nav-links">
          <li className="link"><Link to={"/"} style = {{textDecoration:"none", color:"gray"}}>Home</Link></li>
          <li className="link"><Link to={"/packages"} style = {{textDecoration:"none", color:"gray"}}>Packages</Link></li>
          <li className="link">About</li>
          <li className="link" onClick={() => setIsContact(!isContact)}>Contact Us </li>
          
        </div>

    </div>

    {/* sending the states value and function so I can have access to change the value of this state in Contact.jsx component */}
    <Contact  stateval = {isContact} changeState={closeContactForm} />

 

    
    
           
        
    
    
    
    </>
  )
}

export default Navbar