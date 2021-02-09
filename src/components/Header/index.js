import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const Header = ({ heading }) => (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <HomeIcon />
            </IconButton>
            <Typography variant="h6">{heading}</Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
