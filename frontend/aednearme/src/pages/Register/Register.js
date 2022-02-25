import { Button, FormControl, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

const Register = () => {

  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ password2, setPassword2 ] = useState("")

  const handleUsername = (e) => setUsername(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handlePassword2 = (e) => setPassword2(e.target.value)

  const newUser = () => {
      // submit to database and login and go back to the home page
      if (password !== password2){
          alert("Passwords do not match")
      }
  }  

  return (
    <Paper sx={{ alignItems: 'center'}}>
        <h1>Register here</h1>
        <FormControl margin="normal">
            <FormControl>
                <TextField
                    name="username"
                    label="Username"
                    onChange={handleUsername}/>
            </FormControl>
            <FormControl>
                <TextField
                    name="email"
                    label="Email"
                    onChange={handleEmail}/> 
            </FormControl>
            <FormControl>
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handlePassword}/> 
            </FormControl>
            <FormControl>
                <TextField
                    name="password2"
                    label="Confirm Password"
                    type="password"
                    onChange={handlePassword2}/> 
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={newUser}>Register</Button>
            </FormControl>
        </FormControl>
    </Paper>
  )
}

export default Register