import { Button, FormControl, Input, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import UploadMap from '../../components/UploadMap/UploadMap'

const Upload = () => {
   
  const [ latitude, setLatitude ] = useState("");  
  const [ longitude, setLongitude ] = useState("");
  const [ access, setAccess ] = useState("");  
  const [ uploadImage64, setUploadImage64] = useState("");
  const [ comments, setComments ] = useState("");

  const handleSubmit = () => {
      const data = {
          "lat": latitude,
          "long": longitude,
          "access": access,
          
      }
      axios.post('https://localhost:8000/aed/upload/', data, options)
  }  

  const handleLat = (e) => setLatitude(e.target.value);
  const handleLng = (e) => setLongitude(e.target.value);
  const handleAccess = (e) => setAccess(e.target.value);
  const handleComments = (e) => setComments(e.target.value);

const encodeImageFileAsURL = async (e) => {
      const file = e.target.files[0]
      const base64 = await convertBase64(file)
      console.log(base64)
      setUploadImage64(base64)
    // var file = e.target[0];
    // var reader = new FileReader();
    // reader.onloadend = function() {
    //   console.log('RESULT', reader.result)
    // }
    // reader.readAsDataURL(file);
  }

  const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
              resolve(fileReader.result)
          }
          fileReader.onerror = (error) => {
              reject(error)
          }
      })
  }

  return (
    <div>
        <div><h1>Submit new AED</h1></div>
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
        <UploadMap />
        <FormControl color="secondary">
            <FormControl margin="normal">
               <Input onChange={(e) => {encodeImageFileAsURL(e)}} type="file" />
               <Button variant="raised">Upload img</Button> 
            
            </FormControl>

            <FormControl margin="normal">
                <TextField
                    label="Latitude"
                    id="latitude"
                    type="number"
                    onChange={handleLat}
                />
            </FormControl>
            <FormControl margin="normal">
                <TextField
                        label="Longitude"
                        id="longitude"
                        type="number"
                        onChange={handleLng}
                    />
            </FormControl>
            <FormControl margin="normal">
                <InputLabel id="access-label">
                    Access?
                </InputLabel>
                <Select 
                    id="access"
                    label="Access?"
                    value={access}
                    onChange={handleAccess}>
                    <MenuItem value="Public Access">Public Access</MenuItem>
                    <MenuItem value="Limited Access">Limited Access</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <TextField 
                    label="Comments..."
                    id="Comments"
                    type="text"
                    onChange={handleComments}
                />
            </FormControl>
            <FormControl margin="normal">
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </FormControl>
            
        </FormControl>
    </Paper>
    </div>
  )
}

export default Upload