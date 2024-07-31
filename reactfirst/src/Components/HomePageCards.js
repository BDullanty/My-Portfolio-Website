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
        <Paper elevation={10} className='HomepageInnerPaper'sx={{background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 15}}}>
           <h4 className="HomePage-Card-Title">Mission Statement:</h4>
           <h6 className="HomePage-Card-Content">
            I am eager to contribute to an ethical company as an entry-level or intern software developer.
            <br/><br/> I aim to apply my skills and enthusiasm for technology to support impactful projects and advance my professional development.
            <br/><br/> I am committed to making a positive impact and learning from experienced professionals in a collaborative environment.
           </h6>

       </Paper>
    )
}

export function HomePageAboutMe() { 
    return (
        <Paper elevation={10} className='HomepageInnerPaper'sx={{background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 15}}}>
        <h4 className="HomePage-Card-Title">About Me:</h4>
        <h6 className="HomePage-Card-Content">

        I am a senior at Eastern Washington University in Spokane, Washington, focusing on software development. My academic journey has provided me with a solid foundation in various aspects of software engineering.
        <br/><br/>
        Through my coursework, I have gained extensive knowledge in programming languages, which has honed my ability to write clean, efficient, and maintainable code. I have also delved deeply into algorithms, equipping me with the skills to tackle complex problem-solving tasks and optimize performance.
        <br/><br/>
        In addition to programming and algorithms, I have studied cybersecurity, which has heightened my awareness of security principles and best practices for developing secure applications. This knowledge is crucial for understanding and mitigating potential vulnerabilities in software.
        <br/><br/>
        My experience with Linux clients and servers is both academic and practical. In my coursework, I have engaged in assignments and projects that involve managing and configuring Linux environments. Additionally, personal projects have allowed me to apply and refine my skills in real-world scenarios.
        <br/><br/>
        Driven by a passion for software development, I am motivated by the challenge of solving problems and the opportunity to continuously learn and adapt to new tools and technologies. I am excited to leverage my skills and enthusiasm as I advance in my career as a Software Developer.
        </h6><br/>
      </Paper>
    )
} 
export function HomePageExternalSites() { 
    return (

        <Paper elevation={10} className='HomepageInnerPaper-small'sx={{background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 15}}}>
              <br/>
              <h4 className='ExternalSites-title'>External Sites:</h4>
              <br/>
               <GridOfLinkCards/>
        
        </Paper>
    )
}
