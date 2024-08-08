import {ButtonAppBar} from "../Components/AppBar";
import { PageFooter } from "../Components/footer";
import Paper from '@mui/material/Paper';
import './HireMe.css';
import '../Components/LinkCards';
import { GridOfLinkCards} from "../Components/LinkCards";
import {FadeIn, ZoomInDown} from "../Components/Animations";

export const HireMe = () => {
  return (
    <div className="HireMe">
      <ButtonAppBar/>

      <div className="HireMe-header">
      
        <FadeIn speed='2s'>
        <h1 className="HireMe-titletext">Contact Information</h1>
        <h5 className="Project-secondary-title">(Preferred contact is by email)</h5>
        </FadeIn>
      </div>
      <div className='HireMe-body'>
        <ZoomInDown  speed='1.25s' className="HireMe-Paper-content">
          
        <Paper elevation={20} className="HireMe-Paper-content" sx={{background:'var(--card-background-color)', color:'var(--primary-text-color)'}}>

          <div>
          <p className="HireMe-ContentText">Personal Email: Bdullanty@gmail.com</p>
          <p className="HireMe-ContentText">School Email: Bdullanty@ewu.edu</p>
          </div>
          <br/>
          <p className="HireMe-ContentText">Phone: (775) 842-6198</p>
          <h5 className="HireMe-MediaTitle">SocialMedia:</h5>
          <br/>
          <GridOfLinkCards/>
          
        
        </Paper >
        </ZoomInDown>
        <Paper elevation={3} />
      </div >
      
      <PageFooter/>
    </div>
  )
}
export default HireMe;