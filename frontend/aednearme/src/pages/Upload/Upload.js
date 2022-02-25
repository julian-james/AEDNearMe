import { Button, FormControl, Input, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import UploadMap from '../../components/UploadMap/UploadMap'

const Upload = () => {
   
  const [ latitude, setLatitude ] = useState("");  
  const [ longitude, setLongitude ] = useState("");
  const [ access, setAccess ] = useState("");  

  const handleSubmit = () => {
      // submits upload info to database for admin to approve
      // email confirmation
  }  

  const handleLat = () => setLatitude(e.target.value)
  const handleLng = () => setLongitude(e.target.value)
  const handleAccess = () => setAccess(e.target.value)

  return (
    
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
        <h1>Submit new AED</h1>
        <UploadMap />
        <FormControl color="secondary">
            <FormControl margin="normal">
               <input type="file" />
               <Button variant="raised">Upload img</Button> 
            
            </FormControl >
            <FormControl margin="normal">
                <TextField
                    label="Latitude"
                    id="latitude"
                    onChange={handleLat}
                />
            </FormControl>
            <FormControl margin="normal">
                <TextField
                        label="Longitude"
                        id="longitude"
                        onChange={handleLng}
                    />
            </FormControl>
            <FormControl margin="normal">
                <InputLabel id="access-label">
                    Access?
                </InputLabel>
                <Select 
                    label="Access?"
                    onChange={handleAccess}
                >
                    <MenuItem>Public Access</MenuItem>
                    <MenuItem>Limited Access</MenuItem>
                </Select>
            </FormControl>
            <FormControl margin="normal">
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </FormControl>
            
        </FormControl>
    </Paper>
  )
}

export default Upload