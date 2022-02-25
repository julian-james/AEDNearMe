import React from "react";
import { Link } from "react-router-dom";

//make styles
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

//grid
import Grid from "@material-ui/core/Grid";

//mediaquery
import useMediaQuery from "@material-ui/core/useMediaQuery";

//sns icon
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    position: "absolute",
    width: '100%',
    bottom:'0',
	left:'0',
    margin:'0 auto',
    overflow: "hidden",
    //location of the image: behind / infront
    zIndex: 1302,
    padding: "5px 0",
    "&:before": {
      width: "200%",
      height: "100%",
      top: 0,
      left: "-100%",
      backgroundColor: "#000",
      content: '" "',
      position: "absolute",
      transform: ` rotateZ(-60deg)`,
      [theme.breakpoints.down("sm")]: {
        height: "180%",
      },
    },
  },
  
  snsIcon: {
    width: "40px",
    height: "40px",
    color: "white",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "30px",
      height: "30px",
    },
  },
  
  
}));


export const Footer = ({ setValue, setSelectedIndex }) => {

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        
       
        <Grid container direction="column">
          <Grid container justify="flex-end">
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href="https://AEDnearMe.Netlify.App"
            >
              <HomeIcon className={classes.snsIcon} />
            </Grid>
           
            
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/brandolee15/AEDNearMe"
            >
              <GitHubIcon className={classes.snsIcon} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

