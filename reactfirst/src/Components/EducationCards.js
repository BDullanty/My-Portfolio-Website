import "./EducationCards.css";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Box, Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
export function GridOfEducationCards(){
    const ref = useRef(null); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  const someNumbers = [...Array(30).keys()];
  return (
    <Grid container spacing = {2}
      className="ClassCardBackground"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
        
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
         <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
    </Grid>

  );
}




export function Class210() { 
    return (
            <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
              ':hover': {
            boxShadow: 20,}}}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                 CSCD210
                </Typography>
                <Typography variant="h5" component="div">
                Java Principals
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  A+
                </Typography>
                <Typography variant="body2">
                  An introduction to java
                
                </Typography>
              </CardContent>
              <CardActions>
                
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        
    )
    
}
