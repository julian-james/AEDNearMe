import React from 'react'
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import MainMap from '../../components/MainMap/MainMap';

const Home = () => {
  const navigate = useNavigate();

  const goToCPR = () => {
    navigate('/cpr')
  }

  const goToChoking = () => {
    navigate('/choking')
  }
  
  return (
    <>
    <div><MainMap /></div>
    <Button variant="contained" onClick={goToCPR}>CPR</Button>
    <Button variant="contained" onClick={goToChoking}>Choking</Button>
    <p>If in doubt, please call 999 or 112 for the emergency services</p>

    <p>If you suspect someone is having a cardiac arrest, call 999 or 112, and have someone track down the closest AED using the map. Follow the steps on the CPR page for instructions</p>
    </>
  )
}

export default Home