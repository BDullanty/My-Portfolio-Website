import {ButtonAppBar} from "../Components/AppBar";
import './Education.css';
import '../Components/EducationCards';
import { GridOfEducationCards } from "../Components/EducationCards";
import { PageFooter } from "../Components/footer";
import {FadeIn} from "../Components/Animations";
export const Education = () => {
  return (
    <div className="Education">
      <ButtonAppBar/>
      
      <div className="Education-header">
        <FadeIn speed='4s'>
        <h1 className="Education-title">Completed Coursework</h1>
        <br/>
        <h5 className="Education-subtitle">
        I am currently a senior at Eastern Washington University, with over 26 completed courses in Computer Science and Mathematics. These courses have provided me with a strong foundation in software development, programming languages, algorithms, networking, and cybersecurity, equipping me with the skills needed to tackle complex technical challenges.
        </h5>
        </FadeIn>
        </div>
      <div className='Education-body'>
        <GridOfEducationCards/>
      </div >
      <PageFooter/>
    </div>
  )
}
export default Education;