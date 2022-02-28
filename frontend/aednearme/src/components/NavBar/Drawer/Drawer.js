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
import MobileMenu from "../../DropdownMenu/MobileMenu";

const useStyles = makeStyles(() => ({
  logoBox: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    // fontSize: "20px",
    // fontWeight: "bold",
  },
  icon: {
    color: "#fff",
    // 64f227 bright green color
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bolder",
    lineHeight: "0px"
  },

}));


function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear()
    alert('You have been logged out')
    window.location.reload()
  }

  return (
    <>
      <Drawer className={classes.drawer}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          style={{ background: '#ba181b' }}
        >
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>

  <Divider />

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
            title="Education Hub" 
            menuItems={educationArray} 
            handleClose={() => setOpenDrawer(false)} />

          <Divider />

          
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>

              {
                sessionStorage.getItem('accessToken') ?
                <Link to="/" onClick={handleLogout} className={classes.link}>Logout</Link> :
                <Link to="/login" className={classes.link}>Login</Link>
              }

            </ListItemText>
          </ListItem>

        </List>

      </Drawer>

      <div className={classes.logoBox}>

        <IconButton
          sx={{ fontSize: 80 }}
          onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
          <MenuIcon />
        </IconButton>

        <span >
          <Link className={classes.logo} to="/">AED <br /> nearME </Link>
        </span>
      </div>

    </>
  );
}
export default DrawerComponent;




const aedArray = [
  {
    title: "How to use",
    path: '/aedhowto'
  },
  {
    title: "Register new AED",
    path: '/upload'
  }
]

const cprArray = [
  {
    title: "How to give",
    path: "/cprhowto"
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
    path: "/chokinghowto"
  }
  

]

