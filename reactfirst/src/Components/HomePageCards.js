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
                I am eager to contribute to an ethical company as an intern or entry-level software developer.
                <br /><br /> I aim to apply my skills and enthusiasm for technology to support impactful projects and advance my professional development.
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
                I am Brady Dullanty, a dedicated computer science student with six months remaining until graduation in June 2025.
                <br /><br />
                I have honed strong skills in program development, cybersecurity, computer networking, and cloud computing, particularly with AWS services.
                <br /><br />
                Through diverse coursework in programming, mathematics, cybersecurity, and networking, I have gained the expertise necessary to build robust applications free from vulnerabilities.
                <br /><br />
                I thrive on tackling complex problems and enjoy implementing effective solutions, supported by a solid foundation in data structures, algorithms, and database systems.
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
