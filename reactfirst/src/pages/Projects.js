import {ButtonAppBar} from "../Components/AppBar";
import '../Components/ProjectCards.js';
import { GridOfProjectCards } from "../Components/ProjectCards.js";
import './Projects.css';
import { PageFooter } from "../Components/footer";
export const Projects = () => {
  return (
    <div classname="Projects">
      <ButtonAppBar/>
      <header className="Projects-header">

      <h1 className="Projects-Title">Projects</h1>
      <br/>
      <h5 className="Project-Mission-Statement">Feel free to click on each to view source code.</h5>
    
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