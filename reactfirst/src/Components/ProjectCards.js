import "./ProjectCards.css";

import gitLogo from"../images/GithubLogo.png";
import { Box, Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export function GridOfProjectCards(){
  return(
    <Grid  container spacing = {3} className="ProjectCardBackground">
        <Grid item>
          <PortfolioWebsiteProjectCard/>
          
        </Grid>
        <Grid item>
        <OhHellProjectCard/>
        
        </Grid>      
          <Grid item>
        < ServerProjectCard/>
        </Grid>
        <Grid item>
        < WeatherAssistantToolProjectCard/>
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
                <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
                Portfolio Website
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary" align={"center"}>
                  React, JavaScript, HTML, CSS, AWS
                </Typography>
                <Typography variant="body2" align={"center"} paddingBottom={'20%'}>
                Focus on React, JavaScript, HTML, CSS, and AWS Cloud Services for hosting. All components of this website was created by myself using available libraries. Feel free to check out my progression on creating the website using the below Github Link
                </Typography>
                <PortfolioGithubLinkCard/>
      
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
            <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
              Oh Hell
              </Typography>

              <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary" align={"center"}>
                Java
              </Typography>
              <Typography variant="body2" align={"center"}  paddingBottom={'20%'}>
              A text based card game. Written in Java using OOP and SOLID principles . Integrates cards, players, AI, hands, tables, and a game board.
              Feel free to use the program by using the source code given below using the Github Link.
              </Typography>
              <OhHellGithubLinkCard/>

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
            <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
              Weather Assistant Tool
              </Typography>
              <Typography variant="h5" component="div" align={"center"}>
              
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary" align={"center"}>
              Vue, Typescript, CSS, HTML, Firebase
              </Typography>
              <Typography variant="body2" align={"center"} paddingBottom={'10%'}>
              A Weather app from a group project with a focus on Vue, TypeScript, JavaScript, HTML, CSS, and FireBase hosting. Used several api's such as device GPS, Weather API's, and Locational api's to create a visual weather app.
              </Typography>
       
              <WATGithubLinkCard/>
              <br/>
              <Button sx={{
                  verticalAlign:'center',
                  ':hover': {
          boxShadow: 20}}}>

                </Button>
              
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
              <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
              Public Gaming Servers
              </Typography>
              <Typography variant="h5" component="div" align={"center"}>
              
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary" align={"center"}>
              Linux, SQL, MariaDB, Plugin, Scripting, Teamwork
              </Typography>
              <Typography variant="body2" align={"center"}>
              A Proxy based group of connected servers that link to provide several gaming experiences to over 20,000 unique players for over 5 years. 
              </Typography>
              <br/><br/>
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
            <CardContent sx={{justifyContent:"center"}}>
            <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
              Dynamic Drop Rate Calculator
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary" align={"center"}>
              Statistics, Python, Django
              </Typography>
              <Typography variant="body2" align={"center"}  paddingBottom={'20%'}>
              Software to help automate analysis for item drop odds, to help us set drop rates for the Gaming Servers.
              </Typography>

              <DynamicDropRateGithubLinkCard/>

            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
      
  )
  
}
export function PortfolioGithubLinkCard() { 
    return (
        <Card sx={{ marginLeft:'25%', marginRight:'25%',position:'absolute',bottom:'5%',
            ':hover': {
          boxShadow: 20 }}}>
               <CardMedia component = "img" image={gitLogo} 
               onClick={() => {
                window.open("https://github.com/BDullanty/My-Portfolio-Website","_blank")
               }}
               />
         

        </Card>
    )
}
export function OhHellGithubLinkCard() { 
  return (
      <Card justify="flex-end" alignItems="flex-end" sx={{ marginLeft:'25%', marginRight:'25%',position:'absolute',bottom:'5%', 
          ':hover': {
        boxShadow: 20 }}}>
             <CardMedia component = "img" image={gitLogo} 
             onClick={() => {
              window.open("https://github.com/BDullanty/OH-Hell","_blank")
             }}
             />
       

      </Card>
  )
}
export function WATGithubLinkCard() { 
  return (
      <Card sx={{ marginLeft:'25%', marginRight:'25%', position:'absolute',bottom:'5%',
          ':hover': {
        boxShadow: 20 }}}>
             <CardMedia component = "img" image={gitLogo} 
             onClick={() => {
              window.open("https://github.com/BDullanty/Weather-Assistant-Tool","_blank")
             }}
             />
       

      </Card>
  )
}
export function DynamicDropRateGithubLinkCard() { 
  return (
      <Card sx={{ marginLeft:'25%', marginRight:'25%', position:'absolute',bottom:'5%',
          ':hover': {
        boxShadow: 20 }}}>
             <CardMedia component = "img" image={gitLogo} 
             onClick={() => {
              window.open("https://github.com/EtherealCraft/DynamicDropRateCalculator","_blank")
             }}
             />
       

      </Card>
  )
}