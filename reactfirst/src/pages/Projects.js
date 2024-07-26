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

      <h1 className="Projects-Title">Below is a list of projects I have on github.</h1>
      </header>
      <body className='Projects-body'>
        <GridOfProjectCards/>
      </body >
     <PageFooter/>
    </div>
  )
}
export default Projects;