import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

class About extends Component {
  render() {
    return (
      <div className="aboutpage">
        <div className="banner">
          <div className="container">
            <div className="banner-inner">
              <h1>About Sanitas Healthcare</h1>
            </div>
          </div>
        </div>
        <div className="about-sec">
          <div className="container">
            <div className="about-inner">
              <div className="sanitas">
                <span>About Us</span>
                <h2>We At Sanitas</h2>
                <p>Sanitas Healthcare is occupied in the manufacturing of different range of nutraceuticals products (Tablets, Capsules, Powders, Syrup etc.)</p>
                <p>We at Sanitas Healthcare work at a state of the art manufacturing facility in Gujarat with large scale capacity for wide range of nutraceuticals products.</p>
                <p className="icon-list"><img src="Manufacture.svg" alt="Manufacture"/>State of the art manufacturing unit</p>
                <p className="icon-list"><img src="Dosage.svg" alt="Dosage"/>All dosage form at one place</p>
                <p className="icon-list"><img src="Formulation.svg" alt="Formulation"/>In house F&D facility</p>
                <img className="about-img" src="About-sanitas.png" alt="Sanitas Healthcare"/>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-cta">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-text">
                <h2>Want More Information? Let’s Connect – Contact Us Today!</h2>
                <p>Our friendly and knowledgeable team is ready to help. Reach out for inquiries, support, or to learn more about our products.</p>
              </div>
              <button className="cta-btn"><img src="contact-support.svg" alt="Contact"/>Contact now</button>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stats-outer">
            <div className="container">
              <div className="stats-inner">
                <div className="stat-box">
                  <span>1 crore/month</span>
                  <p>Tablet manufacturing capacity</p>
                </div>
                <div className="stat-box">
                  <span>80 lac/month</span>
                  <p>Capsule manufacturing capacity</p>
                </div>
                <div className="stat-box">
                  <span>45 lacs ltr/month</span>
                  <p>Liquid manufacturing capacity</p>
                </div>
                <div className="stat-box">
                  <span>10 lacs kg/month</span>
                  <p>Powder manufacturing capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="container">
            <h2>Our team</h2>
            <div className="team-inner">
              <div className="team-card">
                <div className="team-img">
                  <img src="Devendra-Patel.jpg" alt="Devendra Patel" />
                </div>
                <div className="team-text">
                  <h3>Devendra Patel</h3>
                  <p className="position">Co-owner</p>
                  <p>
                    Bachlore in Pharmacy Manager,
                    <br />
                    Formulation & Development
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-img">
                  <img src="Tapan-Patel.jpg" alt="Tapan Patel" />
                </div>
                <div className="team-text">
                  <h3>Tapan Patel</h3>
                  <p className="position">Co-owner</p>
                  <p>
                    Master in Pharmacy HOD,
                    <br />
                    Sales
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-img">
                  <img src="Vikram-Patel.jpg" alt="Vikram Patel" />
                </div>
                <div className="team-text">
                  <h3>Vikram Patel</h3>
                  <p className="position">Co-owner</p>
                  <p>
                    Bachlore in Pharmacy HOD,
                    <br />
                    Production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
