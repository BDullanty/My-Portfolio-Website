import "./LinkCards.css";
import gitLogo from"../images/GithubLogo.png"
import linkedInLogo from "../images/LinkedInLogo.png" 
import { Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
         
    </Grid>
    )
}




export function GithubLinkCard() { 
    return (
        <Card >
               <CardMedia component = "img" image={gitLogo} sx={{padding: ".5vh", height:"5vh",width:"10vh",objectFit:"contain"}}/>
         
            <CardActions className="CardLinkButton">
                <Button variant="contained"  size="large" onClick={() => {
                window.open("https://github.com/bdullanty","_blank");
                
            }}
                
                >Link</Button>
            </CardActions>
        </Card>
    )
}

export function LinkedInLinkCard() { 
    return (
        <Card>
        
            <CardMedia component = "img" image={linkedInLogo} sx={{padding: ".5vh", height:"5vh",width:"10vh",objectFit:"contain"}}/>
           
            <CardActions className="CardLinkButton">
                <Button variant="contained" size="large" onClick={() => {
                 window.open("https://linkedin.com/in/bdullanty/","_blank");
             
            }}
                
                >Link</Button>
            </CardActions>
        </Card>
    )
}
