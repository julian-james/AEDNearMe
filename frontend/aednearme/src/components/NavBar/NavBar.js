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
import {MyMenu} from "../DropdownMenu/Menu.js";


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
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>Home</Link>

            <MyMenu title="AED" menuItems={aedArray} />
            <MyMenu title="CPR" menuItems={cprArray} />
            <MyMenu title="Choking" menuItems={chokingArray} />

            <MyMenu title="Education Hub" menuItems={educationArray} />
            <Link to="/register" className={classes.link}>LogIn / Register</Link>
            
        
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
} 

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
    color: "#64f227",
    // 64f227 blight green color
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#FFD39A",
      borderBottom: "1px solid white",
    },
  },

  appbar: {


    position: "static",
    background: '#5702a1',
    // 5702a1 dark-purple color
    // "&:before": {
    //   width: "200%",
    //   height: "100%",
    // //  top 0
    //   right: "100%",
    //   backgroundColor: "#64f227",
    // //   64f227 blight green color 
    //   content: '" "',
    //   position: "absolute",
    //   transform: ` rotateZ(-60deg)`,
    //   [theme.breakpoints.down("sm")]: {
    //     height: "180%",
    //   },
    // },
  },

}));

const aedArray = [
  {
    title: "Locations / Register new",
    path: "/AEDmap"
  },
  {
    title: "How to use",
    path: '/AEDhowto'
  }
]

const cprArray = [
  {
    title: "How to give",
    path: "/cprhowto"
  }
]

const chokingArray = [
  {
    title: "How to help",
    path: "/choking"
  }
]

const educationArray = [
  {
    title: "QUIZ",
    path: "/quiz"
  },
  {
    title: "AED: how to use",
    path: "/aedhowto"
  },
  {
    title: "CPR: how to give",
    path: "/cprhowto"
  },
  {
    title: "Choking: how to help",
    path: "/choking"
  }
]

