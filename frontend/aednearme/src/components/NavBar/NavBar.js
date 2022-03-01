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
import { MyMenu } from "../DropdownMenu/Menu.js";


export const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className={classes.appbar}
    >
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.root}>
            <div className="">
              <Link to="/" className={classes.logo}>AED <br /> nearME </Link>
            </div>

            <div className={classes.navlinks}>
              <Link to="/" className={classes.link} >Home</Link>
              <MyMenu title="AED" menuItems={aedArray} />
              <MyMenu title="CPR" menuItems={cprArray} />
              <MyMenu title="Choking" menuItems={chokingArray} />
              <MyMenu title="Education Hub" menuItems={educationArray} />
              <Link to="/register" className={classes.link}>Signin</Link>
            </div>

            {/* <Link to="/quiz" className={classes.link}>Quiz</Link>
            <Link to="/upload" className={classes.link}>New AED?</Link>
            <Link to="/faq" className={classes.link}>FAQ</Link> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  navlinks: {
    margin: theme.spacing(2),
    display: "flex",
    padding: "20px 0",
    borderBottom: "1px solid #fff"
  },

  logo: {
    flexGrow: "1",
    cursor: "pointer",
    textDecoration: "none",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bolder",
    lineHeight: "0px"
  },

  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    // color: "#64f227",

    // 64f227 blight green color
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    // hover navbar items changes color
    "&:hover": {
      color: "#000",
      borderBottom: "1px solid white",
    },
  },

  appbar: {
    position: "static",
    background: '#ba181b',
    // ba181b dark red colour
    // black line above navbar
    "&:before": {
      width: "100%",
      height: "15px",
      top: 0,
      backgroundColor: "#000",
      content: '" "',
      position: "absolute",
      transform: ` rotateZ(180deg)`,
    },

  },

}));


const aedArray = [
  {
    title: "Add new Location",
    path: "/upload"
  },
  {
    title: "How to use",
    path: '/AEDhowto'
  }
]

const cprArray = [
  {
    title: "How to give",
    path: "/CPRhowto"
  }
]

const chokingArray = [
  {
    title: "How to help",
    path: '/choking'
  }
]

const educationArray = [
  {
    title: "QUIZ",
    path: "/quiz"
  },
  {
    title: "AED: How to use",
    path: "/aedhowto"
  },
  {
    title: "CPR: How to give",
    path: "/cprhowto"
  },
  {
    title: "Choking: How to help",
    path: "/choking"
  }
]

