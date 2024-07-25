import "./ProjectCards.css";
import { Box, Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export function GridOfProjectCards(){
  return(
    <Grid  container spacing = {2} className="ProjectCardBackground">
        <Grid item>
          <PortfolioWebsiteProjectCard/>
          
        </Grid>
        <Grid item>
        <OhHellProjectCard/>
        
        </Grid>
        <Grid item>
        < WeatherAssistantToolProjectCard/>
        </Grid>
        <Grid item>
        < ServerProjectCard/>
        </Grid>
        <Grid item>
        <DynamicDropRateProjectCard/>
        </Grid>
    </Grid>
    )
}

 
export function PortfolioWebsiteProjectCard() { 
    return (
            <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5,
              ':hover': {
            boxShadow: 20}}}>
              <CardContent>
                <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom align={"center"}>
                Portfolio Website
                </Typography>
                <Typography variant="h5" component="div" align={"center"}>
                
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                  React, JavaScript, HTML, CSS, AWS
                </Typography>
                <Typography variant="body2" align={"center"}>
                Focus on React, JavaScript, HTML, CSS, and AWS Cloud Services for hosting. All components of this website was created by myself using available libraries. Feel free to check out my progression on creating the website using the below Github Link
                </Typography>
                <br/>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                  Github Link
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
        
    )
    
}
export function OhHellProjectCard() { 
  return (
    <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5,
      ':hover': {
    boxShadow: 20}}}>
            <CardContent>
              <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom align={"center"}>
              Oh Hell
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Java
              </Typography>
              <Typography variant="body2" align={"center"}>
              A text based card game. Written in Java using OOP and SOLID principles . Integrates cards, players, AI, hands, tables, and a game board.
              Feel free to use the program by using the source code given below using the Github Link.
              </Typography>
              <br/>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Github Link
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Website Link
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
      
  )
  
}
export function WeatherAssistantToolProjectCard() { 
  return (
    <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5,
      ':hover': {
    boxShadow: 20}}}>
            <CardContent>
              <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom align={"center"}>
              Weather Assistant Tool
              </Typography>
              <Typography variant="h5" component="div" align={"center"}>
              
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
              Vue, Typescript, CSS, HTML, Firebase
              </Typography>
              <Typography variant="body2" align={"center"}>
              A Weather app from a group project with a focus on Vue, TypeScript, JavaScript, HTML, CSS, and FireBase hosting. Used several api's such as device GPS, Weather API's, and Locational api's to create a visual weather app. Feel free to see our groups github link below or check out the live website above
              </Typography>
              <br/>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Github Link
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Website Link
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
      
  )
  
}

export function ServerProjectCard() { 
  return (
    <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5,
      ':hover': {
    boxShadow: 20}}}>
            <CardContent>
              <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom align={"center"}>
              Public Gaming Servers
              </Typography>
              <Typography variant="h5" component="div" align={"center"}>
              
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
              Linux, SQL, MariaDB, Plugin, Scripting, Teamwork
              </Typography>
              <Typography variant="body2" align={"center"}>
              A Proxy based group of connected servers that link to provide several gaming experiences to over 20,000 unique players for over 5 years. 
              </Typography>
              <br/>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Github Link
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Website Link
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
      
  )
  
}
export function DynamicDropRateProjectCard() { 
  return (
    <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5,
      ':hover': {
    boxShadow: 20}}}>
            <CardContent>
              <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom align={"center"}>
              Dynamic Drop Rate Calculator
              </Typography>
              <Typography variant="h5" component="div" align={"center"}>
              
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
              Statistics, Python, Django
              </Typography>
              <Typography variant="body2" align={"center"}>
              Software to help automate analysis for item drop odds, to help us set drop rates. 
              </Typography>
              <br/>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Github Link
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={"center"}>
                Website Link
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
      
  )
  
}