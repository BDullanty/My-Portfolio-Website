import {ButtonAppBar} from "../Components/AppBar";
import './Education.css';
import '../Components/EducationCards';
import { GridOfEducationCards } from "../Components/EducationCards";
import { PageFooter } from "../Components/footer";
import {FadeInDown} from "../Components/Animations";
export const Education = () => {
  return (
    <div className="Education">
      <ButtonAppBar/>
      
      <header className="Education-header">
        <FadeInDown>
        <h1 className="Education-title">Completed Coursework</h1>
        <br/>
        <h5 className="Education-subtitle">
            I am currently a senior at Eastern Washington University, having completed over twenty-three courses in Computer Science and Mathematics. These classes have given me a solid foundation in software development, programming languages, algorithms, networks, and cybersecurity.
        </h5>
        </FadeInDown>
        </header>
      <body className='Education-body'>
        <GridOfEducationCards/>
      </body >
      <PageFooter/>
    </div>
  )
}
export default Education;