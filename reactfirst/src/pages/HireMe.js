import {ButtonAppBar} from "../Components/AppBar";
import { PageFooter } from "../Components/footer";
import Paper from '@mui/material/Paper';
import './HireMe.css';
import '../Components/LinkCards';
import { GithubLinkCard, GridOfLinkCards, HackerRankLinkCard } from "../Components/LinkCards";

export const HireMe = () => {
  return (
    <div classname="HireMe">
      <ButtonAppBar/>
      <header className="HireMe-header">

        <Paper elevation={3} />

      </header>
      <body className='HireMe-body'>
        <Paper elevation={20} className="HireMe-Paper-content">
        <h4 className="HireMe-Paper-titletext">Contact Information</h4>
          <p className="HireMe-ContentText">(Prefered contact is by email.)</p>
          <br/>
          <p className="HireMe-ContentText">Personal Email: Bdullanty@gmail.com</p>
          <p className="HireMe-ContentText">School Email: Bdullanty@ewu.edu</p>
          <br/>
          <p className="HireMe-ContentText">Phone: 775 *** ****</p>
          <h5 className="HireMe-MediaTitle">SocialMedia:</h5>
          <br/>
          <GridOfLinkCards/>
        </Paper >
        <Paper elevation={3} />
      </body >
      
      <PageFooter/>
    </div>
  )
}
export default HireMe;