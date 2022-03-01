import { Button, Typography } from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router';

const NotLogged = () => {

  const navigate = useNavigate();
  const handleLogin = () => {
      navigate('/login')
  }      
  return (
    <div>
        <h1>Sign in to register new AED</h1>
        <Typography>
            To register a new AED that is currently not on our map, please sign in/sign up here
        </Typography>
        <Button 
            variant="contained"
            onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default NotLogged