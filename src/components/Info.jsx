import React from "react";

function Info(){
    return<div>
                <h3>Rigel Selmani</h3>
                <h4 className="web">Web Developer</h4>
                <p className="focus">Front-end focused full stack web developer</p>
                <h4 className="technical">TECHNICAL SKILLS</h4>
                <p className="skills-list">HTML, CSS, Bootstrap, Media Queries, JavaScript, JQuery,  APIs, JSON, REST, AJAX, Node Js, Express, React.js, GitHub, MongoDB, MySQL, Handlebars, Sequelize, Firebase, mailchimp, the command line, computer science fundamentals.</p>
          <div className="info-section">  
            <div id="contact">
              <h6 className="contact">Links and Contact Info</h6>
              <div className="contact-text">
                <a className="contact-icon" href="mailto:rigelrigelselmani@hotmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                <p className="contact-p">email</p>
              </div>
              <div className="contact-text">
                <a className="contact-icon" href="tel:703-870-6927" rel="noopener noreferrer"><i className="fas fa-phone-alt"></i></a>
                <p className="contact-p">phone</p>
              </div>
              <div className="contact-text">
                <a className="contact-icon" href="https://drive.google.com/file/d/1X8oPIKDtYQ8k8Z219SmFaa7uRPbm1vEg/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="far fa-file"></i></a>
                <p className="contact-p">ressume</p>
              </div>
              <div className="contact-text">
                <a className="contact-icon" href="https://www.linkedin.com/in/rigel-selmani-504705177/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <p className="contact-p">linkedin</p>
              </div>
              <div className="contact-text">
                <a className="contact-icon" href="https://github.com/rigelselmani" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <p className="contact-p">github</p>
              </div> 
            </div>
          </div>
        </div>
}

export default Info;