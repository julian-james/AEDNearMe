import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, FormControl } from '@mui/material';
import MainMap from '../../components/MainMap/MainMap';
import { makeStyles } from "@material-ui/core";
import './Home.css';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  
}));


const Home = () => {
  const navigate = useNavigate();

  const goToAEDhowto = () => {
    navigate('/AEDhowto')
  }

  const goToUpload = () => {
    navigate('/upload')
  }

  const classes = useStyles();

  

  return (

    <body>
      <div style={{    padding: "20px"   }}>
        <MainMap />
      </div>
      <div style={{    padding: "40px"   }}>
       
        <p>If in doubt, please call 999 or 112 for the emergency services</p>
        <p>If you suspect someone is having a cardiac arrest, call 999 or 112, and have someone track down the closest AED using the map. Follow the steps on the CPR page for more instructions</p>
        </div>
      
    </body>
  ) 

}

export default Home; 