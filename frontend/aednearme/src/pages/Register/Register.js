import { Button, FormControl, Paper, TextField } from '@mui/material'
import React from 'react'

const Register = () => {

  const newUser = () => {
      // submit to database and login and go back to the home page
  }  

  return (
    <Paper>
        <FormControl margin="normal">
            <FormControl>
                <TextField
                    name="username"
                    label="Username"/>
            </FormControl>
            <FormControl>
                <TextField
                    name="email"
                    label="Email"/> 
            </FormControl>
            <FormControl>
                <TextField
                    name="password"
                    label="Password"/> 
            </FormControl>
            <FormControl>
                <TextField
                    name="password2"
                    label="Confirm Password"/> 
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={newUser}>Register</Button>
            </FormControl>
        </FormControl>
    </Paper>
  )
}

export default Register