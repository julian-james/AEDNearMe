import { FormControl, Paper } from '@mui/material'
import React from 'react'
import UploadMap from '../../components/UploadMap/UploadMap'

const Upload = () => {
  return (
    
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
        <UploadMap />
        <FormControl color="secondary">
            <FormControl margin="normal">
                Enter photo
            </FormControl >
            <FormControl margin="normal">
                Lat/Lng?
            </FormControl>
            <FormControl margin="normal">
                Access dropdown
            </FormControl>
            <button type="submit" value="Submit">Submit</button>
        </FormControl>
    </Paper>
  )
}

export default Upload