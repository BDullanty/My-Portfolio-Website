import {ButtonAppBar} from "../Components/AppBar";
import './Education.css';
import '../Components/EducationCards';
import { GridOfEducationCards } from "../Components/EducationCards";
export const Education = () => {
  return (
    <div classname="Education">
      <ButtonAppBar/>
      <header className="Education-header">
      <h1 className="Education-Mission-Statement-title"> Summary</h1>
      <h5 className="Education-Mission-Statement">I have attended over x amount of classes. Feel free to scroll through them below.</h5>
      </header>
      <body className='Education-body'>
        <GridOfEducationCards/>
      </body >
      <footer className="Education-header"/>
    </div>
  )
}
export default Education;