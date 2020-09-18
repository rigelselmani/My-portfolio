import React from "react";
// import Images from "../images.email"

function Contact (){
    return  <div id="contact">
              <h4 className="contact">Contact</h4>
              <a className="number" href="tel:703-870-6927">Phone: +1 703-870-6927</a>
            
              <a href="https://www.linkedin.com/in/rigel-selmani-504705177/" target="_blank"><img className="img-contact" src={require('../images/linkedin.jpg')} /></a>
              
              <a href="https://github.com/rigelselmani" target="_blank"><img className="img-contact" src={require('../images/github.jpg')} /></a>
              
              <a href="mailto:rigelrigelselmani@hotmail.com" target="_blank"><img className="img-contact" src={require('../images/email.jpg')} /></a>
                 
              <a href="https://drive.google.com/file/d/1X8oPIKDtYQ8k8Z219SmFaa7uRPbm1vEg/view?usp=sharing" target="_blank"><img className="img-contact" src={require('../images/resume.png')} /></a>
            </div>
}

export default Contact;