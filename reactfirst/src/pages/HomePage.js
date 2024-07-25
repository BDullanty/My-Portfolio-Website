import logo from '../images/HomePage-logo.jpg';

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
       
   
        
    
      <h4 className="HomePage-Mission-Statement-title">Mission Statement:</h4>
        <h6 className="HomePage-Mission-Statement">
          I am looking for an ethical company for which I can work as a software developer on the entry/intern level.
        </h6>
        <br/>
       
        <br/>
        <Paper elevation={10}>
        <h4 className="HomePage-Mission-Statement-title">About Me:</h4>
        
        <h6 className="HomePage-Mission-Statement">
          I am a current student with senior standing at Eastern Washington University in Spokane Washington. 
          <br/><br/>I have taken a multitude of courses with a focus on specific programming languages, software development, algorithms, networks, and cybersecurity.
          <br/><br/>I have a good understanding of Linux clients and servers, stemming from several networking classes and personal projects.
          <br/><br/>I have a always had a drive to solve problems, and I find myself passionate to learn new tools and skills on my journey of being a Software Developer.
          
        </h6>
        </Paper>
        <br/>
        <h4 className='ExternalSites-title'>External Sites:</h4>
        <br/>
       <GridOfLinkCards/>
       
       
      </body>
      <footer className="HomePage-footer">
         <h6 className="HomePage-Footer-Statement"> Website created by Brady Dullanty using React, hosted using AWS</h6>
      </footer>

    </div>
  );
}

export default HomePage;
