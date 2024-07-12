import logo from '../images/HomePage-logo.jpg';

import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
        <p>
         Welcome to Brady Dullanty's Porfolio Website.
        </p>
        <h4 className="Mission-Statement">Mission Statement:</h4>
        <h6>
          I am a current student at Eastern Washington unviversity looking for an ethical company for which I can work as a software developer
          Intern.
        </h6>
       
      </header>

      
      <body className='HomePage-body'> 
        <h6>
        Links:  
        </h6>
        <a
          className="HomePage-link"
          href="https://github.com/bdullanty"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        
        <a
          className="HomePage-link"
          href="https://LinkedIn.com/in/bdullanty"
          target="_blank"
          rel="noopener noreferrer"
        >
        Linkedin
        </a>
      </body>
    </div>
  );
}

export default HomePage;
