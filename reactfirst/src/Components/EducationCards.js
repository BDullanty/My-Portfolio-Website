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
    <div
      className="ClassCardBackground"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
        
      
          <Class210/>
          <Class210/>
          <Class210/>
          <Class210/>
          <Class210/>
          <Class210/>
          <Class210/>
          <Class210/>
          <Class210/>
          <Class210/>
    </div>

  );
}




export function Class210() { 
    return (
            <Card sx={{ minWidth: 275 }} className="ClassCard">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                test
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        
    )
    
}
