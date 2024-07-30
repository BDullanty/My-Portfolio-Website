import {ButtonAppBar} from "../Components/AppBar";
import { PageFooter } from "../Components/footer";
import Paper from '@mui/material/Paper';
import './HireMe.css';
import '../Components/LinkCards';
import { GridOfLinkCards} from "../Components/LinkCards";

export const HireMe = () => {
  return (
    <div className="HireMe">
      <ButtonAppBar/>
      <header className="HireMe-header">
      <h1 className="HireMe-title">Contact Information</h1>
      <h5 className="Project-Mission-Statement">(Prefered contact is by email)</h5>

      </header>
      <body className='HireMe-body'>
        <Paper elevation={20} className="HireMe-Paper-content" sx={{background:'var(--card-background-color)', color:'var(--primary-text-color)'}}>

          <div>
          <p className="HireMe-ContentText">Personal Email: Bdullanty@gmail.com</p>
          <p className="HireMe-ContentText">School Email: Bdullanty@ewu.edu</p>
          </div>
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