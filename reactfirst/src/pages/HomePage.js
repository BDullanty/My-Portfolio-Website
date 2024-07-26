import logo from '../images/HomePage-logo.jpg';
import { PageFooter } from "../Components/footer";
import './HomePage.css';
import { GridOfLinkCards,GithubLinkCard,  LinkedInLinkCard } from '../Components/LinkCards';
import {ButtonAppBar} from '../Components/AppBar'
import { Button } from '@mui/material';
import {Paper} from '@mui/material';
export const HomePage = () => {
  return (
    <div className="HomePage">
      
       <ButtonAppBar/>
      
       <header className='HomePage-header'>
       
          <h1 className="Homepage-Title">
          Welcome to Brady Dullanty's Porfolio Website.
          </h1>
       </header>

      <body className='HomePage-body'> 
      
        <Paper elevation={20} className='HomepageOuterPaper'>
            <Paper elevation={1} className='HomepageInnerPaper'>
                <h4 className="HomePage-Mission-Statement-title">Mission Statement:</h4>
                <h6 className="HomePage-Mission-Statement">
                  I am looking for an ethical company for which I can work as a software developer on the entry/intern level.
                </h6>
            
                <br/>
              
            </Paper>
            
            <Paper elevation={1} className='HomepageInnerPaper'>
              <h4 className="HomePage-Mission-Statement-title">About Me:</h4>
              
              <h6 className="HomePage-Mission-Statement">
                I am a current student with senior standing at Eastern Washington University in Spokane Washington. 
                <br/><br/>I have taken a multitude of courses with a focus on specific programming languages, software development, algorithms, networks, and cybersecurity.
                <br/><br/>I have a good understanding of Linux clients and servers, stemming from several networking classes and personal projects.
                <br/><br/>I have a always had a drive to solve problems, and I find myself passionate to learn new tools and skills on my journey of being a Software Developer.
                
              </h6>
            </Paper>
            <Paper elevation={1} className='HomepageInnerPaper-small'>
                <br/>
                <h4 className='ExternalSites-title'>External Sites:</h4>
                <br/>
                <GridOfLinkCards/>
          
          </Paper>


        </Paper>
        <br/>
      </body>
     
      <PageFooter/>
      
    </div>
  );
}

export default HomePage;
