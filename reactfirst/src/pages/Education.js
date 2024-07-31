import {ButtonAppBar} from "../Components/AppBar";
import './Education.css';
import '../Components/EducationCards';
import { GridOfEducationCards } from "../Components/EducationCards";
import { PageFooter } from "../Components/footer";
export const Education = () => {
  return (
    <div className="Education">
      <ButtonAppBar/>
      
      <header className="Education-header">
        <h1 className="Education-title">Completed Coursework</h1>
        <br/>
        <h5 className="Education-subtitle">
            I am currently a senior at Eastern Washington University, having completed over twenty-three courses in Computer Science and Mathematics. These classes have given me a solid foundation in software development, programming languages, algorithms, networks, and cybersecurity.
        </h5>
        </header>
      <body className='Education-body'>
        <GridOfEducationCards/>
      </body >
      <PageFooter/>
    </div>
  )
}
export default Education;