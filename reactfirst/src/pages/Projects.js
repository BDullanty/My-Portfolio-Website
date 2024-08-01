import {ButtonAppBar} from "../Components/AppBar";
import '../Components/ProjectCards.js';
import { GridOfProjectCards } from "../Components/ProjectCards.js";
import './Projects.css';
import { PageFooter } from "../Components/footer";
import { FadeInRight } from "../Components/Animations.js";
export const Projects = () => {
  return (
    <div className="Projects">
      <ButtonAppBar/>
      <header className="Projects-header">
        <FadeInRight>
      <h1 className="Projects-Title">Projects</h1>
    
      <br/>
      <h5 className="Projects-Secondary-Title">Feel free to click on each to view source code.</h5>
      </FadeInRight>
      </header>
      <body className='Projects-body'>
        <br/>
        
        <br/>
        <GridOfProjectCards/>
      </body >
     <PageFooter/>
    </div>
  )
}
export default Projects;