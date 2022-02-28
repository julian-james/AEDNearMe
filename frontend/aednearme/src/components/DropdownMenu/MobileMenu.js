import React from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


export default function MobileMenu(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            style={{ background: '#64f227' }}
        >
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    {
                        props.menuItems?.map((item, index) => <ListItemButton key={index} sx={{ pl: 4 }}>
                            <Link onClick={props.handleClose} to={item.path}>
                                <ListItemText primary={item.title} />
                            </Link>
                        </ListItemButton>)
                    }

                </List>
            </Collapse>

        </List>
    );
}