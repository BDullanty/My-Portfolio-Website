
import { PageFooter } from "../Components/footer";
import "../Components/HomePageCards";
import './HomePage.css';
import {FadeInLeft,FadeInRight,FadeIn} from '../Components/Animations';
import {ButtonAppBar} from '../Components/AppBar'
import { HomePagePageGrid } from '../Components/HomePageCards';

export const HomePage = () => {
  return (
    <div className="HomePage">
      
       <ButtonAppBar/>
      
       <header className='HomePage-header'>
          <FadeInLeft delay='0s'>        
              <h1 className="HomePage-Title">
                 Welcome! I'm Brady,         
              </h1>


            <h1 className="HomePage-Title">
              A Software Developer
            </h1>

            </FadeInLeft>
              

          <FadeIn delay='.75s'>
          <h6 className="HomePage-Secondary-Title">Feel free to click a new page above, or read below to learn more about my journey.</h6>
          </FadeIn>
       </header>

      <body className='HomePage-body'> 

      <FadeIn delay='1.5s'>
      <HomePagePageGrid/>
      </FadeIn>
      </body>
     
      <PageFooter/>
      
    </div>
  );
}

export default HomePage;
