import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export const MyMenu = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <span
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{
                    color: "#64f227",
                    fontSize: '20px',
                    cursor: 'pointer',
                    marginLeft: '20px',
                }}
            >
                {props.title}
            </span>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    props.menuItems.map((item, index) => 
                    <MenuItem key={index} onClick={handleClose}> 
                        <Link
                            style={{
                                "textDecoration": "none",
                                "color": "#5702a1",
                            }}
                            to={item.path}>
                            {item.title} 
                        </Link>
                    </MenuItem>)
                }

            </Menu>
        </div>
    );
}