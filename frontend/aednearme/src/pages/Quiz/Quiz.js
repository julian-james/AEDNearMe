import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import React from 'react'
import './Quiz.css';


const Quiz = () => {
  return (
    <div style={{    padding: "40px"   }}>
    <Paper>
    <FormControl>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category">
          <MenuItem>CPR</MenuItem>
          <MenuItem>Choking</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Button variant="contained">Start Quiz</Button>
      </FormControl>
    </FormControl>
    </Paper>
    </div>
  )
}


export default Quiz