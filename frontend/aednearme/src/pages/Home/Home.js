import React from 'react'
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import MainMap from '../../components/MainMap/MainMap';
import { makeStyles } from "@material-ui/core";
import './Home.css';

const useStyles = makeStyles(() => ({
  
}));


const Home = () => {
  const navigate = useNavigate();

  const goToCPR = () => {
    navigate('/cpr')
  }

  const goToChoking = () => {
    navigate('/choking')
  }

  const classes = useStyles();
  
  return (
    <body>
    <div className={classes.container}>
      <div style={{    padding: "20px"   }}>
        <MainMap />
      </div>
      <div style={{    padding: "40px"   }}>
        <Button variant="contained" onClick={goToCPR}>CPR</Button>
        <Button variant="contained" onClick={goToChoking}>Choking</Button>
        <Button variant="contained">Drowning</Button>

        <p>If in doubt, please call 999 or 112 for the emergency services</p>
        <p>If you suspect someone is having a cardiac arrest, call 999 or 112, and have someone track down the closest AED using the map. Follow the steps on the CPR page for more instructions</p>
        </div>
    </div> 
    </body>
  ) 

}

export default Home; 