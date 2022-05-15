import React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
            <Box position="fixed"><List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Homepage"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#pages">
                        <ListItemIcon>
                            <ArticleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Pages"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#group">
                        <ListItemIcon>
                            <GroupsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Groups"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#market">
                        <ListItemIcon>
                            <StoreIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#friends">
                        <ListItemIcon>
                            <PeopleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Friends"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#settings">
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#profile">
                        <ListItemIcon>
                            <AccountBoxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#profile">
                        <ListItemIcon>
                            <DarkModeIcon/>
                        </ListItemIcon>
                        <Switch></Switch>
                    </ListItemButton>
                </ListItem>
            </List></Box>
        </Box>
    );
};

export default Sidebar;
