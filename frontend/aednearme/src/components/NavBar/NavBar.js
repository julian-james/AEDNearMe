import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer/Drawer.js";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#FFD39A",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#FFD39A",
      borderBottom: "1px solid white",
    },
  },
}));


export const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar 
      position="static"
      style={{ background: '#9A0680' }}
    >
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/quiz" className={classes.link}>Quiz</Link>
          <Link to="/upload" className={classes.link}>New AED?</Link>
          <Link to="/cpr" className={classes.link}>CPR</Link>
          <Link to="/faq" className={classes.link}>FAQ</Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
