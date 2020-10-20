import React from "react";

function Info(){
    return<div>
                <h3>Rigel Selmani</h3>
                <h4 className="web">Web Developer</h4>
                <p className="focus">Front-end focused full stack web developer</p>
                <h4 className="technical">TECHNICAL SKILLS</h4>
                <p className="skills-list">HTML, CSS, Bootstrap, Media Queries, JavaScript, JQuery,  APIs, JSON, REST, AJAX, Node Js, Express, React.js, GitHub, MongoDB, MySQL, Handlebars, Sequelize, Firebase, mailchimp, the command line, computer science fundamentals.</p>
            <div id="contact">
              <h4 className="contact">Contact</h4>
              <a className="number" href="tel:703-870-6927">Phone: +1 703-870-6927</a>
            
              <a href="https://www.linkedin.com/in/rigel-selmani-504705177/" target="_blank" rel="noopener noreferrer"><img className="img-contact" src={require('../images/linkedin.jpg')} alt="contact" /></a>
              
              <a href="https://github.com/rigelselmani" target="_blank" rel="noopener noreferrer"><img className="img-contact" src={require('../images/github.jpg')} alt="contact" /></a>
              
              <a href="mailto:rigelrigelselmani@hotmail.com" target="_blank" rel="noopener noreferrer"><img className="img-contact" src={require('../images/email.jpg')} alt="contact" /></a>
                 
              <a href="https://drive.google.com/file/d/1X8oPIKDtYQ8k8Z219SmFaa7uRPbm1vEg/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="img-contact" src={require('../images/resume.png')} alt="contact" /></a>
            </div>
          </div>
}

export default Info;