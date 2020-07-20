import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Narasaraopeta Engineering College</h3>
                <p className="info">Bachelor of technology<span>•</span> <em className="date">June 2017</em></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Narayana junior college</h3>
                <p className="info">Intermediate <span>•</span> <em className="date">March 2003</em></p>

              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Modern High School</h3>
                <p className="info">SSC <span>•</span> <em className="date">March 2003</em></p>

              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">


              <ul className="skills">
              <li>Python</li>
                <li>C programming</li>
                <li>HTML5</li>
                <li>Java</li>
                <li>jQuery</li>
              </ul>
      
          </div>
        </div>
      </section>
    </React.Fragment>
    );
  }
}
