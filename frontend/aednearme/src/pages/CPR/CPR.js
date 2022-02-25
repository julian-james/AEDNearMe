import { TextField } from '@material-ui/core'
import { Typography } from '@mui/material'
import React from 'react'
import CprVid from '../../components/CprVid/CprVid'

const CPR = () => {
  return (
    <div>
        <h1>CPR</h1>
        <CprVid />
        <Typography />Step 1: Check the person over and check for breathing for 10 seconds. If the person is unresponsive, call 999
        <Typography />Step 2: Start hands only CPR, 
        <Typography />Step 3: 
        <Typography />Read more here about performing CPR at <a href="https://www.sja.org.uk/get-advice/first-aid-advice/unresponsive-casualty/how-to-do-cpr-on-an-adult/" target="_blank">St. John's Ambulance</a>
    </div>
  )
}

export default CPR