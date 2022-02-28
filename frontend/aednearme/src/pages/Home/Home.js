import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { Grid, Container, Button, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MainMap from '../../components/MainMap/MainMap';
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  const goToAEDhowTo = () => {
    navigate('/AEDhowTo')
  }

  const goToUpload = () => {
    navigate('/upload')
  }
  
  return (
    <Fragment >
      <Container maxWidth="md" className="pb-5" style={{paddingBottom: "100px"}}>
        <Grid container spacing={4}>

          <Grid
            item
            lg={12}
            className="px-0 mx-auto d-flex align-items-center">

            <div className="text-center">
              
              <div>

                <h1>IN A LIFE THREATENING EMERGENCY, CALL 999</h1>
                <p>
                If you believe a person has suffered a sudden cardiac arrest (SCA) and is unresponsive and not breathing, immediately ring either 999 or 112 and ask for the ambulance service. They will advise you on what action to take and either inform you where your nearest defibrillator is located or ask if you have a defibrillator. The operator will remain on the line and ask you a series of questions which should only take you a few moments and advise you on what steps to take to assist in emergency.
                </p>

                  <MainMap />

                <div>
                  

                  <Button variant="contained" 
                  onClick={goToAEDhowTo}
                    component={Link}
                    size="large"
                    color="primary"
                    variant="contained"
                    className="m-2 py-3 px-5"
                    title="View Carolina React Admin Dashboard with Material-UI Free Live Preview">How to use AED
                    </Button>

                    <Button variant="contained" onClick={goToUpload}
                      component={Link}
                      size="large"
                      color="primary"
                      variant="contained"
                      className="m-2 py-3 px-5"
                      title="View Carolina React Admin Dashboard with Material-UI Free Live Preview">Add a NEW location</Button>


                 

                  
                </div>
                <small className="d-block pt-4"></small>
              </div>
            </div>
          </Grid>


        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
