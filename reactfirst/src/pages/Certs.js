import "../Components/Themes.css";

import {ButtonAppBar} from "../Components/AppBar";
import './Certs.css';
import { PageFooter } from "../Components/footer";
import {FadeIn} from "../Components/Animations";
import AWSAcademyCert from "../images/AWSAcademyCert.png";

import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';

export const Certs = () => {
  return (
    <div className="Certs">
      <ButtonAppBar/>
      
      <div className="Education-header">
        <FadeIn speed='4s'>
        <h1 className="Education-title">Certificates</h1>
        <br/>
        <h5 className="Education-subtitle">
          Currently my Certs include AWS Academy Graduate - AWS Academy Cloud Architecting.
        </h5>
        </FadeIn>
        </div>
      <div className='Education-body'>
      <Card sx={{
  ':hover': {
    boxShadow: 20,   
    backgroundColor: 'transparent',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center',     // Centers vertically
    cursor: 'pointer'
  },
  position: 'relative',
  margin: 0, // Remove margin to avoid overflow
  padding: 0, // Remove padding to avoid layout issues
  display: 'flex',
  justifyContent: 'center', // Ensures centered content
  alignItems: 'center', // Ensures centered content
  backgroundColor: 'transparent',
}}>
  <CardMedia 
    component="img" 
    image={AWSAcademyCert} 

    sx={{
      backgroundColor: 'transparent',
      display: 'block',
      padding: 0, // Remove padding for proper scaling
      margin: 0, // Remove any potential margin causing overflow
      width: '60vw',  // Ensure image stretches to fill container width
      height: '100%', // Ensure image stretches to fill container height
      boxSizing: 'border-box', // Accounts for padding and borders within the element
    }}
               />
         

        </Card>
       </div >
      <PageFooter/>
    </div>
  )
}
export default Certs;