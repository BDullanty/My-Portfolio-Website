import logo from '../images/HomePage-logo.jpg';

import './HomePage.css';
import { GridOfLinkCards,GithubLinkCard,  LinkedInLinkCard } from '../Components/LinkCards';
import {ButtonAppBar} from '../Components/AppBar'
import { Button } from '@mui/material';
export const HomePage = () => {
  return (
    <div className="HomePage">
       <ButtonAppBar/>

      <body className='HomePage-body'> 
       
        
      <h1 className="Homepage-Title">
         Welcome to Brady Dullanty's Porfolio Website.
        </h1>
        <br/>
      <h4 className="HomePage-Mission-Statement-title">Mission Statement:</h4>
        <h6 className="HomePage-Mission-Statement">
          I am looking for an ethical company for which I can work as an entry level software developer.
        </h6>
        <br/>
        <h4 className="HomePage-Mission-Statement-title">About Me:</h4>
        
        <h6 className="HomePage-Mission-Statement">
          I am a current student with senior standing at Eastern Washington unviversity. My goal is to prosper as a software engineer under the guidance of a company. 
          <br/><br/>I have taken a multitude of course with a focus on software development, algorithms, networks, and cybersecurity.
          <br/><br/>I have a good understanding of Linux server hosting as well, stemming from several networking classes and personal projects.<br/><br/>
           I have a always had a drive to solve problems, and I find myself passionate to learn new tools and skills on my journey of being a Software Developer.
          <br/><br/>I am an experience worker, having worked over a year in several industries including the Light and Sound, Food, and Medical. From this experience I have refined my personal and deescalation skils.
          
        </h6>
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
