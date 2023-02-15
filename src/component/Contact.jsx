import React, { useState } from 'react'
import '../css/Contact.css'
import WestIcon from '@mui/icons-material/West';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Stack } from '@mui/system';

const Contact = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const onIconClick = () => {
        const value = props.stateval === false;
        props.changeState(value)
    }

  return (
    <>
    <div className ={`container ${props.stateval ? "open" : ""}`}>
        <div>
        <IconButton style={{position:'absolute', top:'0', right:'5px'}} onClick = {onIconClick}>
        <WestIcon  fontSize='large' color='primary' />
        </IconButton>
        </div>
        
        <div>
        <form action="POST">
            <Stack direction='row' spacing={8}  marginBottom = {5}>

                <TextField variant='standard'
                 label = 'FirstName'
                 required
                 value={firstName}
                 onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  />
                <TextField variant='standard'
                 color = 'primary'
                 label = 'LastName'
                 required
                 value={lastName}
                 onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  />


            </Stack>

            <Stack direction='row'  marginBottom = {5}>
                <TextField variant='standard'
                type='email'
                placeholder='Enter your Email'
                fullWidth
                required
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon color='primary'/>
                      </InputAdornment>
                    ),
                  }}
                  value={email}
                  onChange={(event) => {
                     setEmail(event.target.value);
                   }}
                 
                />
            </Stack>

            <Stack direction='row' marginBottom = {5}>
                <TextField variant='outlined'
                fullWidth
                color='primary'
                label = 'Subject'
                required 
                value={subject}
                onChange={(event) => {
                   setSubject(event.target.value);
                 }}
                />
            </Stack>

            <Stack direction='row' marginBottom = {5}>
                <TextField variant='outlined'
                fullWidth
                color='primary'
                label = 'Message'
                value={message}
                onChange={(event) => {
                   setMessage(event.target.value);
                 }}
                />
            </Stack>
            <Button type='submit' color='primary' size='large' variant='contained' >Submit</Button>
        </form>
        </div>
        

        
    </div>
    
    
    
    
    </>
  )
}

export default Contact