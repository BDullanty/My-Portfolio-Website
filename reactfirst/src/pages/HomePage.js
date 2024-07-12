import logo from '../images/HomePage-logo.jpg';

import './HomePage.css';
import { GridOfLinkCards,GithubLinkCard,  LinkedInLinkCard } from '../Components/LinkCards';
export const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
        <p>
         Welcome to Brady Dullanty's Porfolio Website.
        </p>
        <h4 className="HomePage-Mission-Statement-title">Mission Statement:</h4>
        <h6 className="HomePage-Mission-Statement">
          I am a current student at Eastern Washington unviversity looking for an ethical company for which I can work as a software developer
          Intern.
        </h6>

        <h4>Short Summary:</h4>
        
        <h6 className="HomePage-Mission-Statement">
          I am a current student at Eastern Washington unviversity looking for an ethical company for which I can work as a software developer
          Intern. more ect.
          
        </h6>

      </header>

      
      <body className='HomePage-body'> 
        <h4>Links:</h4>
       <GridOfLinkCards/>
      </body>
    </div>
  );
}

export default HomePage;
