import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../images/HomePage-logo.jpg';
export function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" width ='100%'>
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
                window.location.assign("./");
                   
               }}>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
            </Typography>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
                window.location.assign("./Education");
                   
               }}>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} center>
            Education and Classes
          </Typography> 
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} center>
          
          </Typography>
                <button>
                    Hire Me
                </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}