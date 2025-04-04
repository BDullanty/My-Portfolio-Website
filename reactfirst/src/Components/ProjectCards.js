import "./ProjectCards.css";
import './Themes.css';
import {FadeInUp} from '../Components/Animations';

import gitLogo from"../images/GithubLogo.png";
import { Button, CardActions, CardMedia, Fade } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export function GridOfProjectCards(){
  return(
    <Grid  container spacing = {3} className="ProjectCardGrid">
   
        <Grid item>
        <FadeInUp >
          <PortfolioWebsiteProjectCard/>
          
        </FadeInUp>
        </Grid>
        <Grid item>
          <FadeInUp delay='.25s'>
        <OhHellProjectCard/>
        </FadeInUp>
        
        </Grid>      
          <Grid item>
            <FadeInUp delay='.5s'>
        < ServerProjectCard/>
        </FadeInUp>
        </Grid>
        <Grid item>
          <FadeInUp delay = '.75s'>
        < WeatherAssistantToolProjectCard/>
        </FadeInUp>
        </Grid>

        <Grid item>
        <FadeInUp delay = '1s'>
        <DynamicDropRateProjectCard/>
        </FadeInUp>
        </Grid>
    </Grid>
    )
}

 
export function PortfolioWebsiteProjectCard() { 
    return (
            <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5, background:'var(--card-background-color)', color:'var(--primary-text-color)',
              ':hover': {
            boxShadow: 24}}}>
              <CardContent>
                <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
                Portfolio Website
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize:22 }} color='var(--secondary-text-color)'align={"center"}>
                  React, JavaScript, HTML, CSS, AWS
                </Typography>
                <Typography variant="body2" align={"center"} paddingBottom={'24%'}>
                    I developed my personal portfolio website using React, JavaScript, HTML, CSS, and AWS Cloud Services for hosting. Every component was crafted by me, leveraging available libraries to enhance functionality and design. You can explore the development process and progress through the GitHub link below.
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
    <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5, background:'var(--card-background-color)', color:'var(--primary-text-color)',
      ':hover': {
    boxShadow: 24}}}>
            <CardContent>
            <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
              Full Stack Card Game
              </Typography>

              <Typography sx={{ mb: 1.5, fontSize:22 }} color='var(--secondary-text-color)'align={"center"}>
                Java,C#,React, JavaScript, HTML, CSS, AWS services
              </Typography>
              <Typography variant="body2" align={"center"}  paddingBottom={'24%'}>
              A full stack game adhering to OOP and SOLID principles. Back end started as a text based game written in Java, but was later
              reworked into C#. Front end is built using AWS services including Cognito, EC2, and RDS
              databases. You can access and try out the program via the source code provided in the GitHub link below.
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
    <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5, background:'var(--card-background-color)', color:'var(--primary-text-color)',
      ':hover': {
    boxShadow: 24}}}>
            <CardContent>
            <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
              Weather Assistant Tool
              </Typography>
              <Typography variant="h5" component="div" align={"center"}>
              
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:22 }} color='var(--secondary-text-color)' align={"center"}>
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
          boxShadow: 24}}}>

                </Button>
              
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
      
  )
  
}

export function ServerProjectCard() { 
  return (
    <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5, background:'var(--card-background-color)', color:'var(--primary-text-color)',
      ':hover': {
    boxShadow: 24}}}>
            <CardContent>
              <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
              Public Gaming Servers
              </Typography>
              <Typography variant="h5" component="div" align={"center"}>
              
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:22 }} color='var(--secondary-text-color)' align={"center"}>
              Linux, SQL, MariaDB, Plugin, Scripting, Teamwork
              </Typography>
              <Typography variant="body2" align={"center"}>
                Own and contribute to a proxy-based network of gaming servers that have provided a range of gaming experiences to over 24,000 unique players for more than five years. This project involves extensive teamwork and integration of various server management and scripting technologies.
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
    <Card className="ProjectCard" sx={{ minWidth: 275, boxShadow: 5,  background:'var(--card-background-color)', color:'var(--primary-text-color)',
      ':hover': {
    boxShadow: 24}}}>
            <CardContent sx={{justifyContent:"center"}}>
            <Typography sx={{ fontSize: 34 }} variant="h5" component="div" align={"center"} gutterBottom >
              Dynamic Drop Rate Calculator
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:22 }} color='var(--secondary-text-color)' align={"center"}>
              Statistics, Python, Django
              </Typography>
              <Typography variant="body2" align={"center"}  paddingBottom={'24%'}>
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
        <Card sx={{ marginLeft:'25%', marginRight:'25%',position:'absolute',bottom:'5%', background:'var(--card-inner-background-color)',
            ':hover': {
          boxShadow: 24,
          cursor: 'pointer' }}}>
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
      <Card justify="flex" alignItems="flex" sx={{ marginLeft:'25%', marginRight:'25%',position:'absolute',bottom:'5%', background:'var(--card-inner-background-color)',
          ':hover': {
        boxShadow: 24,
        cursor: 'pointer' }}}>
             <CardMedia component = "img" image={gitLogo} 
             onClick={() => {
              window.open("https://github.com/BDullanty/OH-Hell-Web-App","_blank")
             }}
             />
       

      </Card>
  )
}
export function WATGithubLinkCard() { 
  return (
      <Card sx={{ marginLeft:'25%', marginRight:'25%', position:'absolute',bottom:'5%', background:'var(--card-inner-background-color)',
          ':hover': {
        boxShadow: 24,
        cursor: 'pointer' }}}>
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
      <Card sx={{ marginLeft:'25%', marginRight:'25%', position:'absolute',bottom:'5%', background:'var(--card-inner-background-color)',
          ':hover': {
        boxShadow: 24,
        cursor: 'pointer' }}}>
             <CardMedia component = "img" image={gitLogo} 
             onClick={() => {
              window.open("https://github.com/EtherealCraft/DynamicDropRateCalculator","_blank")
             }}
             />
       

      </Card>
  )
}