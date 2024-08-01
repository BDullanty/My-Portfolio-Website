import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './AppBar.css';
import './Themes.css';
export function ButtonAppBar() {

  return (
  
      <AppBar  sx={{backgroundColor: 'var(--primary-color)' ,color:'var(--primary-text-color)'}}>
        <Toolbar sx={{height: '10vh' }}>
          <IconButton
            
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
                window.location.assign("/");
                   
               }}>
            
            
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
                window.location.assign("/Education");
                   
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
                window.location.assign("/Projects");
                   
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
                window.location.assign("/HireMe");
                   
               }}><Typography variant="body1" component="div" sx={{ flexGrow: 0 }} center>
                    Hire Me
                    </Typography>
                </IconButton>
        </Toolbar>
      </AppBar>
  );
}