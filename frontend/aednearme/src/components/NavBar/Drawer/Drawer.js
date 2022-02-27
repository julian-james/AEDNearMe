import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@mui/material/Menu';
import { MenuItem } from "@mui/material";
import MobileMenu from "../../DropdownMenu/MobileMenu";

const useStyles = makeStyles(() => ({
  homeBox: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  // link:{
  //       textDecoration:"none",
  //       color: "blue",
  //       fontSize: "20px",
  //   },
  icon: {
    color: "#64f227",
    // 64f227 bright green color
  },
  home: {
    color: "#64f227",
    // 64f227 bright green color
    textDecoration: "none",
    fontSize: "20px",
  }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer className={classes.drawer}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          style={{ background: '#64f227' }}
        >

          <MobileMenu 
            title="AED" 
            menuItems={aedArray} 
            handleClose={() => setOpenDrawer(false)} />

          <Divider />

          <MobileMenu 
            title="CPR" 
            menuItems={cprArray} 
            handleClose={() => setOpenDrawer(false)} />

          <Divider />

          <MobileMenu 
            title="Choking" 
            menuItems={chokingArray} 
            handleClose={() => setOpenDrawer(false)} />

          <Divider />

          <MobileMenu 
            title="Education Hub" 
            menuItems={educationArray} 
            handleClose={() => setOpenDrawer(false)} />

          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/register">Login / Register</Link>
            </ListItemText>
          </ListItem>

          
        </List>

      </Drawer>

      <div className={classes.homeBox}>

        <IconButton
          sx={{ fontSize: 80 }}
          onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
          <MenuIcon />
        </IconButton>

        <span >
          <Link className={classes.home} to="/">Home</Link>
        </span>
      </div>

    </>
  );
}
export default DrawerComponent;


const aedArray = [
  {
    title: "Locations / Register new",
    path: "/AEDmap"
  },
  {
    title: "How to use",
    path: '/AEDhowto',
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

