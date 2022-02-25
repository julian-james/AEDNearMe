import { Button, Card, FormControl, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

  const navigate = useNavigate();  

  const handleLogin = () => {
      // Handle user login
  }
  const handleRegister = () => {
      navigate('/register')
  }
    
  return (
    <Paper sx={{alignItems: 'center'}}>
        <h1>Login</h1>
        <FormControl margin="normal">
            <FormControl>
                <TextField 
                    name="username"
                    label="Username"/>
            </FormControl>
            <FormControl>
                <TextField 
                    name="password"
                    label="Password"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={handleLogin}>Login</Button>
            </FormControl>
        
            New user? 
            <Button variant="contained" onClick={handleRegister}>Register here!</Button>
        </FormControl>
    </Paper>
    
  )
}

export default Login