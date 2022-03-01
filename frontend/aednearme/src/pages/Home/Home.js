import React, { Fragment } from 'react';
import { Grid, Container, Button, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router';
import MainMap from '../../components/MainMap/MainMap';
import './Home.css';

const useStyles = makeStyles(() => ({

  title: {
    borderBottom: '1px solid #fff',
    paddingBottom: '5px',
  }

}));

const Home = () => {
  const navigate = useNavigate();

  const goToAEDhowTo = () => {
    navigate('/AEDhowTo')
  }

  const goToUpload = () => {
    navigate('/upload')
  }

  const classes = useStyles();

  return (
    <Fragment>

      <Container className="pb-5" style={{
        paddingBottom: "100px",
        paddingTop: "20px"
      }}>
        <Grid container spacing={4}>

          <Grid item md={5} >
            <h1 className={"display-2 mb-5 font-weight-bold", classes.title}>IN A LIFE THREATENING EMERGENCY, CALL 999</h1>
            <p className="font-size-xl text-white-50 mb-3">
              If you believe a person has suffered a sudden cardiac arrest (SCA) and is unresponsive and not breathing, immediately ring either 999 or 112 and ask for the ambulance service. They will advise you on what action to take and either inform you where your nearest defibrillator is located or ask if you have a defibrillator. The operator will remain on the line and ask you a series of questions which should only take you a few moments and advise you on what steps to take to assist in emergency.
            </p>

            <Button variant="contained" 
                  onClick={goToAEDhowTo}
                    // component={Link}
                    size="large"
                    color="primary"
                    variant="contained"
                    className="m-2 py-3 px-5"
                    title="View Carolina React Admin Dashboard with Material-UI Free Live Preview">How to use AED
                    </Button>

                    <Button variant="contained" onClick={goToUpload}
                      // component={Link}
                      size="large"
                      color="primary"
                      variant="contained"
                      className="m-2 py-3 px-5"
                      title="View Carolina React Admin Dashboard with Material-UI Free Live Preview">Add a NEW location</Button>

          </Grid>

          <Grid
            item
            md={7}
            className="px-0 my-5 mx-auto d-flex align-items-center">
            <div>
              <MainMap />
            </div>
                
          </Grid>
        </Grid>
      </Container>
          
    </Fragment>
  );
};

export default Home;
