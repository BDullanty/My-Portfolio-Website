
import { PageFooter } from "../Components/footer";
import "../Components/HomePageCards";
import './HomePage.css';

import {ButtonAppBar} from '../Components/AppBar'
import { HomePagePageGrid } from '../Components/HomePageCards';
export const HomePage = () => {
  return (
    <div className="HomePage">
      
       <ButtonAppBar/>
      
       <header className='HomePage-header'>
   
          <h1 className="HomePage-Title">
          Welcome! I'm Brady,
          <br/>
           A Software Developer
          </h1>
          <h6 className="HomePage-Secondary-Title">Feel free to browse around and learn more about my journey.</h6>
 
       </header>

      <body className='HomePage-body'> 


      <HomePagePageGrid/>
      </body>
     
      <PageFooter/>
      
    </div>
  );
}

export default HomePage;
