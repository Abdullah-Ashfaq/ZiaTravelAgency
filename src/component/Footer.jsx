import { Button, IconButton } from '@mui/material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TtyIcon from '@mui/icons-material/Tty';
import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">

        <div className="footer-links">

          <img src="logo.jpg" alt="" className="footer-logo" />

          <div className="footer-link">

            <div className="footer-link-heading">Contact Info</div>

            <Button style={{ color: "gray" }} startIcon={<WhatsAppIcon style={{ color: "#58D5D3" }} />}>+92300-5235745</Button>
            <Button style={{ color: "gray" }} startIcon={<LocalPhoneOutlinedIcon style={{ color: "#58D5D3" }} />}>+92334-5556566</Button>
            <Button style={{ color: "gray" }} startIcon={<TtyIcon style={{ color: "#58D5D3" }} />}>+9251-2271322</Button>

          </div>

          <div className="footer-link" >

            <div className="footer-link-heading">Location info</div>
            <div className="icon">
              <IconButton disableRipple>
                <LocationOnOutlinedIcon style={{ color: "#58D5D3" }} />
              </IconButton>
              <p>1st Floor, Ghousia Plaza Blue Area Islamabad</p>
            </div>


          </div>


        </div>
      </footer>
    </>
  )
}

export default Footer