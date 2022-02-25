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


const useStyles = makeStyles(()=>({

  // link:{
  //       textDecoration:"none",
  //       color: "blue",
  //       fontSize: "20px",
  //   },
    icon:{
        color: "#64f227",
        // 64f227 bright green color
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
        style={{ background: '#64f227'}}
       
        
        >
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>

          <Divider/>


          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/quiz">QUIZ</Link>
            </ListItemText>
          </ListItem>

          <Divider/>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/upload">New AED?</Link>
            </ListItemText>
          </ListItem>

          <Divider/>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/cpr">CPR</Link>
            </ListItemText>
          </ListItem>

          <Divider/>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">FAQ</Link>
            </ListItemText>
          </ListItem>

        </List>

      </Drawer>

      <IconButton 
        sx={{ fontSize: 80 }}
        onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>        
        <MenuIcon />
      </IconButton>

    </>
  );
}
export default DrawerComponent;