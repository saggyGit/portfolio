import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
           <div class="wrapper">
        <div class="shape-1"></div>
        <div class="shape-2"></div>
        <div class="container">
            <h2>Animated Skills </h2>
            <div class="skills">
                <div class="details">
                    <span>HTML</span>
                    <span>90%</span>
                </div>
                <div class="rod">
                    <div id="html-rod"></div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span>CSS</span>
                    <span>75%</span>
                </div>
                <div class="rod">
                    <div id="css-rod"></div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span>Javascript</span>
                    <span>62%</span>
                </div>
                <div class="rod">
                    <div id="js-rod"></div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span>React JS</span>
                    <span>70%</span>
                </div>
                <div class="rod">
                    <div id="jQuery-rod"></div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span>Node JS & Express JS</span>
                    <span>80%</span>
                </div>
                <div class="rod">
                    <div id="js-rod"></div>
                </div>
            </div>
        </div>
    </div>
    <div className="about">
      <div className="name">ABOUT ME</div>
      <br />
      <div className="discription">I'm a full stack web developer . I have serious passion for UI effects ,animation and creating dynamic user experiences.Well organization person,problem solver.
      interested in the entire frontend spectrum and working on project with positive people.
      </div>
    </div>
            
        </div>
    );
};

export default Portfolio;