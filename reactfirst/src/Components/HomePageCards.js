import {GridOfLinkCards} from "./LinkCards";
import "./HomePageCards.css";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export function HomePagePageGrid(){
    return(
        <Grid  container spacing={2}>
            <Grid item>
                 <HomePageleftGrid/>
            </Grid>
            <Grid item>
                <HomePageAboutMe/>
            </Grid>
       </Grid>
    )
}

export function HomePageleftGrid() { 
    return(
        <Grid container spacing={2} direction={'column'} >
            <Grid item>

                    <HomePageMissionStatement/>
            </Grid>
             <Grid item>
                  <HomePageExternalSites/>
        </Grid>

        </Grid>
    )

}

export function HomePageMissionStatement() { 
    return (
        <Paper elevation={10} className='HomepageInnerPaper'>
           <h4 className="HomePage-Mission-Statement-title">Mission Statement:</h4>
           <h6 className="HomePage-Mission-Statement">
             I am looking to join a team for an ethical company for which I can assist on the entry/intern level as a software developer.
           </h6>

       </Paper>
    )
}

export function HomePageAboutMe() { 
    return (
        <Paper elevation={10} className='HomepageInnerPaper'>
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

              <Paper elevation={10} className='HomepageInnerPaper-small'>
              <br/>
              <h4 className='ExternalSites-title'>External Sites:</h4>
              <br/>
               <GridOfLinkCards/>
        
        </Paper>
    )
}
