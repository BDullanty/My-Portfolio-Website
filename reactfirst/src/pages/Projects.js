import {ButtonAppBar} from "../Components/AppBar";
import '../Components/ProjectCards.js';
import { GridOfProjectCards } from "../Components/ProjectCards.js";
import './Projects.css';

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
      <footer className="Projects-footer">
         <h6 className="Projects-Footer-Statement">
           Website created by Brady Dullanty using React, hosted using AWS
        </h6>
        </footer>
     
    </div>
  )
}
export default Projects;