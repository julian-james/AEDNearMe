import { Typography } from '@mui/material';
import { Grid, Container, Button } from '@material-ui/core';
import CprVid from '../../components/CprVid/CprVid'
import DefibVid from '../../components/DefibVid/DefibVid'

import React, { Fragment } from 'react'
import axios from 'axios';

import { FormControl, Input, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'

const CPRhowto = () => {
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
              
            <CprVid />
                
          </Grid>

          <Grid item md={4}>

            {/*<p className="font-size-xl text-white-50 mb-3"></p>*/}
            <h1 className={"display-2 mb-5 font-weight-bold" }>Simple steps: How to perform chest compressions</h1>
        
            <Typography />Step 1: If you suspect someone is having a cardiac arrest, check the person over, tilt the head back and check for breathing for 10 seconds. If the person is unresponsive, ask someone to call 999/112 and tell them to bring an AED
            <Typography />Step 2: Start hands only CPR, lock your hands together and place them by the person's chest.
            <Typography />Step 3: With straight arms, use your body to push 5-6cm in depth at a rate of 100-120 bpm. (For reference, use the beat of Staying Alive by the Bee Gees)
            <Typography />Step 4: Keep doing hands only CPR until a defibrillator is present and the ambulance arrives. If there are multiple people around you, switch to other helpers every 5 rounds of 30 pushes to avoid fatigue. 
            <Typography />Read more here about performing CPR at <a href="https://www.sja.org.uk/get-advice/first-aid-advice/unresponsive-casualty/how-to-do-cpr-on-an-adult/" target="_blank">St. John's Ambulance</a>
    
          </Grid>

        </Grid>
      </Container>

    </Fragment>
      
  )
}

export default CPRhowto