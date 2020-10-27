import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, Notifications } from '@material-ui/icons/';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link2 from "next/link";

export default function Logged({ isAuth }) {

    const { session } = isAuth;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notifyAnchorEl, setNotifyAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isNotifyMenuOpen = Boolean(notifyAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotifyMenuOpen = (event) => {
        setNotifyAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        setNotifyAnchorEl(null);
    };

    console.log("Logged Navbar", isAuth)
    return (
        <div>

            <IconButton
                aria-label="account of current user"
                aria-controls="notifiesMenu"
                onClick={handleNotifyMenuOpen}
                aria-haspopup="true"
                color="inherit"
            >
                <Notifications />
            </IconButton>
            <IconButton
                aria-label="account of current user"
                aria-controls="userMenu"
                onClick={handleProfileMenuOpen}
                aria-haspopup="true"
                color="inherit"
                edge={false}
            >
                <AccountCircle />
            </IconButton>


            <Menu
                id="userMenu"
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                keepMounted
                transformOrigin={{
                    horizontal: 'right',
                }}
            >
                <Link2 href={"/profile/" + session.username} passHref>
                    <MenuItem>My Profile</MenuItem>
                </Link2>
                <Link2 href={"/account"} passHref>
                    <MenuItem>Settings</MenuItem>
                </Link2>
                <Link2 href={"/auth/sign-out"} passHref>
                    <MenuItem>Logout</MenuItem>
                </Link2>
            </Menu>

            <Menu
                id="notifiesMenu"
                anchorEl={notifyAnchorEl}
                open={isNotifyMenuOpen}
                onClose={handleMenuClose}
                keepMounted
                transformOrigin={{
                    horizontal: 'right',
                }}
            >
                <Link2 href={"/account"} passHref>
                    <MenuItem>Logout</MenuItem>
                </Link2>
            </Menu>
        </div>
    );
}

/**
 * Created by iSnakeBuzz_ at 25/10/2020
 */
