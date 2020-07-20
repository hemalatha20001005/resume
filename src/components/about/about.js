import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am a student studying Btech in CSE</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Hema Latha</span><br />
                  <span>Chilakaluripet

                  </span><br />
                  <span>999999999</span><br />
                  <span>hemayalagala@gmail.com</span>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}
