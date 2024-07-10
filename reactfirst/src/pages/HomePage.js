import logo from '../logo.svg';
import '../App.css';

export const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to Brady Dullanty's Porfolio Website.
        </p>
        <h4 className="Mission-Statement">Mission Statement:</h4>
        <h6>
          I am a current student at Eastern Washington unviversity looking for an ethical company fo which I can work as a software developer
          Intern.
        </h6>
        <h3>
        Links:  
        </h3>
        <a
          className="App-link"
          href="https://github.com/bdullanty"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        
        <a
          className="App-link"
          href="https://LinkedIn.com/in/bdullanty"
          target="_blank"
          rel="noopener noreferrer"
        >
        Linkedin
        </a>
      </header>
    </div>
  );
}

export default HomePage;
