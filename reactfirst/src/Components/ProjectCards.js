import "./ProjectCards.css";
import { Box, Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export function GridOfProjectCards(){
  return(
    <Grid  container spacing = {2} className="CardLinkGrid">
        <Grid item>
          <WeatherProjectCard/>
        </Grid>
        
    </Grid>
    )
}

 
export function WeatherProjectCard() { 
    return (
            <Card sx={{ minWidth: 275 }} className="ClassCard">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align={"center"}>
                 Title
                </Typography>
                <Typography variant="h5" component="div" align={"center"}>
                T
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                  Link here
                </Typography>
                <Typography variant="body2" align={"center"}>
                  Project
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
        
    )
    
}
