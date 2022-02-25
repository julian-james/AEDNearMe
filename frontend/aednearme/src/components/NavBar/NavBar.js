import React from 'react'
import { Link } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));


export const NavBar = () => {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          AEDnearMe
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/quiz" className={classes.link}>
              Quiz
            </Link>
            <Link to="/upload" className={classes.link}>
              New AED?
            </Link>
            <Link to="/cpr" className={classes.link}>
            CPR
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}


  // return (
  //   <div>
  //       <nav>
  //           <ul>
  //               <li>
  //               <Link to="/">Home</Link>
  //               </li>
  //               <li>
  //               <Link to="/quiz">Quiz</Link>
  //               </li>
  //               <li>
  //               <Link to="/upload">New AED?</Link>
  //               </li>
  //           </ul>
  //       </nav>
  //   </div>
  // )

