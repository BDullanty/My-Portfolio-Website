import {GridOfLinkCards} from "./LinkCards";
import "./HomePageCards.css";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


export function HomePagePageGrid(){
    return(
        <Grid  container spacing={2} justifyContent="center">
            <Grid item >
                 <HomePageLeftGrid/>
            </Grid>
            <Grid item >
                <HomePageRightGrid/>
            </Grid>
       </Grid>
    )
}

export function HomePageLeftGrid() { 
    return(
        <Grid container spacing={2} direction={'column'} >
            <Grid item className="HomePageInnerGrid">
                <HomePageMissionStatement/>
            </Grid>
            <Grid item >
                <HomePageExternalSites/>
            </Grid>

        </Grid>
    )

}
export function HomePageRightGrid() { 
    return(
        <Grid container spacing={2} direction={'column'} className="HomePageInnerGrid">
            <Grid item >
                <HomePageAboutMe/>
            </Grid>
  

        </Grid>
    )

}

export function HomePageMissionStatement() { 
    return (
        <Paper elevation={10} className='HomepageInnerPaper'sx={{background:'var(--card-background-color)',
            ':hover': {
          boxShadow: 15}}}>
           <h4 className="HomePage-Mission-Statement-title">Mission Statement:</h4>
           <h6 className="HomePage-Mission-Statement">
             I am looking to join a team for an ethical company for which I can assist on the entry/intern level as a software developer.
           </h6>

       </Paper>
    )
}

export function HomePageAboutMe() { 
    return (
        <Paper elevation={10} className='HomepageInnerPaper'sx={{background:'var(--card-background-color)',
            ':hover': {
          boxShadow: 15}}}>
        <h4 className="HomePage-Mission-Statement-title">About Me:</h4>
        <h6 className="HomePage-Mission-Statement">
          I am a current student with senior standing at Eastern Washington University in Spokane Washington. 
          <br/><br/>I have taken a multitude of courses with a focus on specific programming languages, software development, algorithms, networks, and cybersecurity.
          <br/><br/>I have a good understanding of Linux clients and servers, stemming from several networking classes and personal projects.
          <br/><br/>I have a always had a drive to solve problems, and I find myself passionate to learn new tools and skills on my journey of being a Software Developer.
        </h6>
      </Paper>
    )
}
export function HomePageExternalSites() { 
    return (

        <Paper elevation={10} className='HomepageInnerPaper-small'sx={{background:'var(--card-background-color)',
            ':hover': {
          boxShadow: 15}}}>
              <br/>
              <h4 className='ExternalSites-title'>External Sites:</h4>
              <br/>
               <GridOfLinkCards/>
        
        </Paper>
    )
}
