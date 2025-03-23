import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './AppBar.css';
import './Themes.css';
export function ButtonAppBar() {

  return (
  
<AppBar
  sx={{
    backgroundColor: 'var(--primary-color)',
    color: 'var(--primary-text-color)',
    width: '100%',
    
    boxSizing: 'border-box', 
    overflowX: 'auto',   
    }}
>
  <Toolbar
    sx={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',     
      height: '12vh',
      whiteSpace: 'nowrap',     
      overflowX: 'auto',
      gap: 2,           
      horizontalPadding: 2,   
      '@media (max-width: 600px)': {
        justifyContent: 'flex-start', 
      }                 
    }}
  >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
            sx={{ mr: 2, 
              
              ':hover': {backgroundColor: 'var(--secondary-color)' }}}
            onClick={() => {
                window.location.assign("/");
                   
               }}>               
            
            
            <Typography variant="body1" component="div" 
             sx={{ 
              fontSize: '1.7rem', // Increases the font size of the text
              fontWeight: 'bold', // Optionally, make the text bold for better visibility
            }}>
            Home
            </Typography>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,':hover': {backgroundColor: 'var(--secondary-color)' }}}
            onClick={() => {
                window.location.assign("/Education");
                   
               }}>
            
            <Typography variant="body1" component="div" center
             sx={{ 
              fontSize: '1.5rem', // Increases the font size of the text
              fontWeight: 'bold', // Optionally, make the text bold for better visibility
            }}>
            Education
          </Typography> 
          </IconButton>



                
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ':hover': {backgroundColor: 'var(--secondary-color)'}}} onClick={() => {
                window.location.assign("/Certificates");
                   
               }}><Typography variant="body1" component="div" center
               sx={{ 
                fontSize: '1.5rem', // Increases the font size of the text
                fontWeight: 'bold', // Optionally, make the text bold for better visibility
              }}>
                    Certificates
                    </Typography>
                </IconButton>
           
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ':hover': {backgroundColor: 'var(--secondary-color)' }}}
            onClick={() => {
                window.location.assign("/Projects");
                   
               }}>
            
            <Typography variant="body1" component="div" center
             sx={{ 
              fontSize: '1.5rem', // Increases the font size of the text
              fontWeight: 'bold', // Optionally, make the text bold for better visibility
            }}>
            Projects
            </Typography>
          </IconButton>


     
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ':hover': {backgroundColor: 'var(--secondary-color)'}}} onClick={() => {
                window.location.assign("/HireMe");
                   
               }}><Typography variant="body1" component="div" center
               sx={{ 
                fontSize: '1.5rem', // Increases the font size of the text
                fontWeight: 'bold', // Optionally, make the text bold for better visibility
              }}>
                    Contact Me
                    </Typography>
                </IconButton>

       </Toolbar>
      </AppBar>
  );
}