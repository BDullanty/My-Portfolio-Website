import "./LinkCards.css";
import gitLogo from"../images/GithubLogo.png";
import linkedInLogo from "../images/LinkedInLogo.png"; 
import hackerrankLogo from "../images/HackerRankLogo.png";

import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';

export function GridOfLinkCards(){
    return(
    <Grid  container spacing = {2} className="CardLinkGrid">
        <Grid item>
        
        <LinkedInLinkCard/>
        </Grid>
        <Grid item>
        <GithubLinkCard/>
        
        </Grid>
        <Grid item>
            <HackerRankLinkCard/>
        </Grid>
    </Grid>
    )
}




export function GithubLinkCard() { 
    return (
        <Card sx={{
            ':hover': {
          boxShadow: 20}}}>
               <CardMedia component = "img" image={gitLogo} sx={{padding: ".5vh", height:"5vh",width:"10vh",background:'var(--card-inner-background-color)',objectFit:"contain"}}
               onClick={() => {
                window.open("https://github.com/bdullanty","_blank")
               }}
               />
         

        </Card>
    )
}

export function LinkedInLinkCard() { 
    return (
        <Card sx={{
            ':hover': {
          boxShadow: 20}}}>
        
            <CardMedia component = "img" image={linkedInLogo} 
            sx={{padding: ".5vh", height:"5vh",width:"10vh",objectFit:"contain",background:'var(--card-inner-background-color)'}}
            onClick={() => {
                window.open("https://linkedin.com/in/bdullanty/","_blank");
            
           }}/>

        </Card>
    )
}

export function HackerRankLinkCard() { 
    return (
        <Card sx={{
            ':hover': {
          boxShadow: 20}}}>
        
            <CardMedia component = "img" image={hackerrankLogo} 
            sx={{padding: ".5vh", height:"5vh",width:"10vh",objectFit:"contain",background:'var(--card-inner-background-color)'}}
            onClick={() => {
                window.open("https://www.hackerrank.com/profile/bdullanty","_blank");
            
           }}/>

        </Card>
    )
}
