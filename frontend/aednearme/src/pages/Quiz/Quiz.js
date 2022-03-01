import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import React, { useState } from 'react'
import './Quiz.css';


const Quiz = () => {

  const [ category, setCategory ] = useState("")

  const handleCategory = (e) => setCategory(e.target.value)
  const handleStart = () => {
    
  }

  return (
    <div style={{    padding: "40px"   }}>
    <Paper>
    <FormControl>
      <FormControl>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          id="category"
          label="Category"
          value={category}
          onChange={handleCategory}>
          <MenuItem value="cpr">CPR</MenuItem>
          <MenuItem value="choking">Choking</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Button 
          variant="contained"
          onClick={handleStart}>Start Quiz</Button>
      </FormControl>
    </FormControl>
    </Paper>
    </div>
  )
}


export default Quiz