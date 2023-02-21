import React, { useState } from 'react'
import '../css/Contact.css'
import WestIcon from '@mui/icons-material/West';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/system';
import axios from 'axios';

const Contact = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage]= useState(false);
    const [erroMessage, setErrorMessage]= useState(false);

    const onIconClick = () => {
        const value = props.stateval === false;
        props.changeState(value)
    }

    const onFormSubmit = async (event) => {
      event.preventDefault();
      try {

        const response = await axios.post(`https://63f157ed5703e063fa560d2c.mockapi.io/Contact`, {
          firstName,
          lastName,
          email,
          subject,
          message
        })
        if (response) {
          setFirstName('');
          setLastName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setSuccessMessage(true);
          setTimeout(() => {
            setSuccessMessage(false);
          }, 3000)
        }
        
      }     
      
      catch (error) {
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 3000)
        
      }
     

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
        <form action="POST" onSubmit={onFormSubmit}>
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
            
            {successMessage &&
            <Alert severity="success" color="info">
            Your Message has been sent
            </Alert>
            
            }
            {erroMessage &&
            <Alert variant="filled" severity="error">
            There's an error while sending your response 
            </Alert>
            
            }
            
        </form>
        </div>
        

        
    </div>
    
    
    
    
    </>
  )
}

export default Contact