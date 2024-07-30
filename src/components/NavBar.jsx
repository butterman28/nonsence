import '../css/link.css';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Stack,
    Menu,
    MenuItem
  } from '@mui/material'
import React, { useState } from 'react';
import {Drawer, List, ListItem, Divider, ListItemText, ListItemButton, ListItemIcon,useTheme, useMediaQuery } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import InfoIcon from '@mui/icons-material/Info';

function NavBar(){
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const drawerContent = (
    <List>
        <ListItem button component="a" href="#home">
        <Stack direction="column" alignItems="center" spacing={1}>
          <IconButton size="large" edge="start" sx={{ color: "#78869B" }} aria-label="logo">
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="caption">My Portfolio </Typography>
        </Stack>
      </ListItem>
      <Divider />
      <ListItem disablePadding component="a" href="#about">
      <ListItemButton>
        <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding component="a" href="#experiance">
      <ListItemButton>
        <ListItemText primary="Experience" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding component="a" href="#clients">
      <ListItemButton>
        <ListItemText primary="Work" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding component="a" href="#contact">
      <ListItemButton>
        <ListItemText primary="Contact Us" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
      <AppBar position="absolute" color="transparent">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton size="large" edge="start" sx={{color:"#78869B"}} aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <>
              <IconButton size="large" edge="start" sx={{color:"#78869B"}} aria-label="logo">
                <CatchingPokemonIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:"#78869B"}}>
                My Portfolio
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit" size="small" variant="contained" component="a" href="#about">About</Button>
                <Button color="inherit" size="small" variant="contained" component="a" href="#experiance">Experience</Button>
                <Button color="inherit" size="small" variant="contained" component="a" href="#clients">Work</Button>
                <Button color="inherit" size="small" variant="contained" component="a" href="#contact">Contact Us</Button>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default NavBar