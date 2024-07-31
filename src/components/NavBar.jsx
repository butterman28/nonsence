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
  const handleItemClick = () => {
    setOpen(false);
  };

  const drawerContent = (
    <List color="transparent">
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
      <ListItemButton onClick={handleItemClick}>
        <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding component="a" href="#experiance">
      <ListItemButton onClick={handleItemClick}>
        <ListItemText primary="Experience" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding component="a" href="#contact">
      <ListItemButton onClick={handleItemClick}>
        <ListItemText primary="Contact" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
      <AppBar position="fixed" sx={{ backgroundColor: "#0A192F" }}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton size="large" edge="start" sx={{color:"#78869B"}} aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}  color="transparent">
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
                <Button  size="small" variant="contained" component="a" href="#about">About</Button>
                <Button  size="small" variant="contained" component="a" href="#experiance">Experience</Button>
                <Button  size="small" variant="contained" component="a" href="#contact">Contact</Button>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default NavBar