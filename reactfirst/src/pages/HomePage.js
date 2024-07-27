
import Grid from '@mui/material/Unstable_Grid2';
import logo from '../images/HomePage-logo.jpg';

import { PageFooter } from "../Components/footer";
import "../Components/HomePageCards";
import './HomePage.css';

import { GridOfLinkCards,GithubLinkCard,  LinkedInLinkCard } from '../Components/LinkCards';
import {ButtonAppBar} from '../Components/AppBar'
import { Button, Tab } from '@mui/material';
import {Paper} from '@mui/material';
import { HomePageMissionStatement, HomePagePageGrid } from '../Components/HomePageCards';
export const HomePage = () => {
  return (
    <div className="HomePage">
      
       <ButtonAppBar/>
      
       <header className='HomePage-header'>
   
          <h1 className="Homepage-Title">
          Welcome! I'm Brady,
          <br/>
           A Software Developer
          </h1>
          <h6 className="HomePage-Mission-Statement">Feel free to browse around and learn more about my journey.</h6>
 
       </header>

      <body className='HomePage-body'> 


      <HomePagePageGrid/>
      </body>
     
      <PageFooter/>
      
    </div>
  );
}

export default HomePage;
