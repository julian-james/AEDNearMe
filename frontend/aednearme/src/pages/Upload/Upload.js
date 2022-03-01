import React, { useState, Fragment } from 'react'
import axios from 'axios';

import { Button, FormControl, Input, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import { Grid, Container } from '@material-ui/core';

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
    

  return (
    <Fragment>

        <Container className="pb-5" style={{
                paddingBottom: "100px",
                paddingTop: "20px"
            }}>
            <Grid container spacing={4}>

                <Grid
                item
                md={7}
                className="px-0 my-5 mx-auto d-flex align-items-center">
                
                 <UploadMap />
                 
                </Grid>

                <Grid item md={4} 
                style={{ paddingTop: "5px"}}
                >

                    {/*<p className="font-size-xl text-white-50 mb-3"></p>*/}
                    <h1 className={"display-2 mb-5 font-weight-bold" }>Submit new AED</h1>

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
                </Grid>
            </Grid>
        </Container>





        
    </Fragment>
  )
}

export default Upload






