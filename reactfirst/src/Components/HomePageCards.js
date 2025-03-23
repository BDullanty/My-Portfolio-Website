import { GridOfLinkCards } from "./LinkCards";
import "./HomePageCards.css";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


export function HomePagePageGrid() {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item >
                <HomePageLeftGrid />
            </Grid>
            <Grid item >
                <HomePageRightGrid />
            </Grid>
        </Grid>
    )
}

export function HomePageLeftGrid() {
    return (
        <Grid container spacing={2} direction={'column'} >
            <Grid item className="HomePageInnerGrid">
                <HomePageMissionStatement />
            </Grid>
            <Grid item >
                <HomePageExternalSites />
            </Grid>

        </Grid>
    )

}
export function HomePageRightGrid() {
    return (
        <Grid container spacing={2} direction={'column'} className="HomePageInnerGrid">
            <Grid item >
                <HomePageAboutMe />
            </Grid>


        </Grid>
    )

}

export function HomePageMissionStatement() {
    return (
        <Paper elevation={10} className='HomepageInnerPaper' sx={{
            background: 'var(--card-background-color)', color: 'var(--primary-text-color)',
            ':hover': {
                boxShadow: 15
            }
        }}>
            <h4 className="HomePage-Card-Title">Mission Statement:</h4>
            <h6 className="HomePage-Card-Content">
                I am eager to contribute as an intern or entry-level software developer.
                <br /><br /> I aim to apply my SDE skills and passion for growth to support impactful projects and advance my professional development.
                <br /><br /> I am committed to making a positive impact and learning from experienced professionals in a collaborative environment.
            </h6>

        </Paper>
    )
}

export function HomePageAboutMe() {
    return (
        <Paper elevation={10} className='HomepageInnerPaper' sx={{
            background: 'var(--card-background-color)', color: 'var(--primary-text-color)',
            ':hover': {
                boxShadow: 15
            }
        }}>
            <h4 className="HomePage-Card-Title">About Me:</h4>
            <h6 className="HomePage-Card-Content">
                I am Brady Dullanty, a Software Developer and a BSCS student with less than 3 months remaining until I graduate in June 2025.
                <br /><br />
                I have strong skills in software development, including C#, Java, Python, and more. 
                <br /><br />
                Through diverse coursework in software development, AWS cloud computing, mathematics, cybersecurity, and networking, I have gained the expertise necessary to move into the development industry.
                <br /><br />
                I enjoy tackling complex problems and enjoy solving problems with effective solutions in my field.
            </h6>

        </Paper>
    )
}
export function HomePageExternalSites() {
    return (

        <Paper elevation={10} className='HomepageInnerPaper-small' sx={{
            background: 'var(--card-background-color)', color: 'var(--primary-text-color)',
            ':hover': {
                boxShadow: 15
            }
        }}>
            <br />
            <h4 className='ExternalSites-title'>External Sites:</h4>
            <br />
            <GridOfLinkCards />

        </Paper>
    )
}
