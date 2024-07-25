import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../images/HomePage-logo.jpg';
import './AppBar.css';
export function ButtonAppBar() {

  return (
  
      <AppBar position='sticky' color='primary' >
        <Toolbar >
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
                window.location.assign("./");
                   
               }}>
            
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Home
            </Typography>
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
                window.location.assign("./Education");
                   
               }}>
            
            <Typography variant="body1" component="div" sx={{ flexGrow: 0 }} center>
            Education
          </Typography> 
          </IconButton>
          
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
                window.location.assign("./Projects");
                   
               }}>
            
            <Typography variant="body1" component="div" sx={{ flexGrow: 0 }} center>
            Projects
            </Typography>
          </IconButton>


     
                <IconButton
                 size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} onClick={() => {
                window.location.assign("./HireMe");
                   
               }}><Typography variant="body1" component="div" sx={{ flexGrow: 0 }} center>
                    Hire Me
                    </Typography>
                </IconButton>
        </Toolbar>
      </AppBar>
  );
}