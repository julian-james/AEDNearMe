import React from 'react'
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import MainMap from '../../components/MainMap/MainMap';
import { makeStyles } from "@material-ui/core";
// import './AEDmap.css';

const useStyles = makeStyles(() => ({
  
}));


const AEDmap = () => {
  const navigate = useNavigate();

//   const goToCPR = () => {
//     navigate('/cpr')
//   }

//   const goToChoking = () => {
//     navigate('/choking')
//   }

  const classes = useStyles();
  
  return (

    <body>
      <div style={{    padding: "40px"   }}>
        <h1>AED: Current locations</h1>
        <p>If in doubt, please call 999 or 112 for the emergency services</p>

        <MainMap />

      </div>
      <div style={{    padding: "40px"   }}>
       
        <p>If in doubt, please call 999 or 112 for the emergency services</p>
        <p>If you suspect someone is having a cardiac arrest, call 999 or 112, and have someone track down the closest AED using the map. Follow the steps on the CPR page for more instructions</p>
        </div>
    </body>
  ) 

}

export default AEDmap; 