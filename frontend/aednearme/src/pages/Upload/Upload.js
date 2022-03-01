import { Button, FormControl, Input, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react'
import useUploadMap from '../../components/UploadMap/UploadMap';
import UploadMap from '../../components/UploadMap/UploadMap'

const Upload = () => {
   
  const [ latitude, setLatitude ] = useState("");  
  const [ longitude, setLongitude ] = useState("");
  const [ access, setAccess ] = useState("");  
  const [ uploadImage64, setUploadImage64] = useState("");
  const [ comments, setComments ] = useState("");

  const handleSubmit = async () => {
      const data = {
          "username": "trevor",
          "address": "11-19 Artillery Row",
          "post_code": "SW7059G",
          "what3words_link": "http://what3words.com/fruity.song.plant",
          "lat": latitude,
          "long": longitude,
          "access": access,
          "approved": false,
          "photo_url": uploadImage64,
          "comments": comments
      }
      const options = {
          headers: new Headers({
              "Content-Type": "application/json",
            //   Authorization: "Bearer "+token 
            }),
          
      }
      const result = await axios.post('http://localhost:8000/aed/upload/', data, options)
      console.log(result)
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
  
  const {render, markers} = useUploadMap();
  console.log(markers)
  useEffect(() => {
    if(markers[0]){
        setLatitude(markers[0].lat)
        setLongitude(markers[0].lng)
    }  
  }, [markers])


  return (
    <div>
        <div><h1>Submit new AED</h1></div>
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
        {render}
        
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
                    value={latitude}
                    onChange={handleLat}
                />
            </FormControl>
            <FormControl margin="normal">
                <TextField
                        label="Longitude"
                        id="longitude"
                        type="number"
                        value={longitude}
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