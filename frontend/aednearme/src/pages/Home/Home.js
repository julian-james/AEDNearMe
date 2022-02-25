import React from 'react'
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const goToCPR = () => {
    navigate('/cpr')
  }
  
  return (
    <>
    <div><h1>Google maps here</h1></div>
    <Button variant="contained" onClick={goToCPR}>CPR</Button>
    <Button variant="contained">Choking</Button>
    <Button variant="contained">Drowning</Button>
    <p>If in doubt, please call 999 or 112 for the emergency services</p>
    </>
  )
}

export default Home