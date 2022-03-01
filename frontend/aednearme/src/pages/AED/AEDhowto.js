import { Typography } from '@mui/material';
import { Grid, Container } from '@material-ui/core';
import DefibVid from '../../components/DefibVid/DefibVid'

import React, { Fragment } from 'react'

import { FormControl, Input, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'

const AEDhowto = () => {
  return (
    <Fragment>

    <Container className="pb-5" style={{
      paddingBottom: "100px",
      paddingTop: "20px"
    }}>
        
        <Grid container spacing={4}>

          <Grid item md={4} 
          style={{ paddingTop: "5px"}}
          >

            <h1 className={"display-2 mb-5 font-weight-bold" }>How to use a defibrillator</h1>
            
            <Typography />Step 1: Have someone continue to perform CPR and follow the instructions of the defibrillator. 
            <Typography />Step 2: Remove clothing from person's chest and find the pads. Peel off the plastic and place the pads indicated by the pictures onto the person. (One pad of the right side under collarbone, second pad on the left side below armpit)
            <Typography />Step 3: AED will analyse the person's heart rhythm. Stop chest compressions and wait for the AED's instructions
            <Typography />Step 4: If shock is advised, tell everyone to stand back and clear of the person. After shock is delivered start chest compressions when told to do so by AED. 
            
            <p>Step 5: Leave the AED on as it will reanalyse heart rhythm and follow the instructions until help arrives</p>

          </Grid>

          <Grid style={{paddingBottom: "50px"}}
          id
          item
          md={7}
          className="px-0 my-5 mx-auto d-flex align-items-center"
          >
              
          <DefibVid />
                
          </Grid>

          
        </Grid>
      </Container>


    </Fragment>
      
  )
}

export default AEDhowto