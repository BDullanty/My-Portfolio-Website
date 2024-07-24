import {ButtonAppBar} from "../Components/AppBar";
import '../Components/ProjectCards.js';
import { GridOfProjectCards } from "../Components/ProjectCards.js";
import './Projects.css';

export const Projects = () => {
  return (
    <div classname="Projects">
      <ButtonAppBar/>

      <body className='Projects-body'>
        <h1 className="Projects-Title">Below is a list of projects I have on github.</h1>
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