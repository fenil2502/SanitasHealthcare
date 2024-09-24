import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

class About extends Component {
  render() {
    return (
      <div className="aboutpage">
        <div className="about-inner">
          <div className="banner">
            <div className="banner-outer">
              <div className="container">
                <div className="banner-text">
                  <h1>About Us</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="zigzag">
            <div className="container">
              <div className="zigzag-inner">
                <div className="zigzag-img">
                  <img src="sanitas-about.jpg" alt="Sanitas" />
                </div>
                <div className="zigzag-text">
                  <h2>
                    Sanitas Healthcare
                    <br />
                    Where healthy life is created
                  </h2>
                  <p>
                    We at Sanitas Healthcare work at a state of the art
                    manufacturing facility in Gujarat with large scale capacity
                    for wide range of nutraceuticals products.
                  </p>
                  <p>
                    WHO–GMP Certified Company - Sanitas Healthcare is occupied
                    in the manufacturing of different range of Nutraceuticals
                    products (Tablets, Capsules, Powders, Syrup etc.)
                  </p>
                  <p>
                    We at Sanitas Healthcare work at a state of the art
                    manufacturing facility in Gujarat with large scale capacity
                    for wide range of Nutraceuticals products.
                  </p>
                  <div className="our-work">
                    <p>
                      <FontAwesomeIcon icon={faCheck} />
                      State of the art manufacturing unit
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCheck} />
                      In house F&D facility
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCheck} />
                      All dosage form at one place
                    </p>
                  </div>
                  <button className="prm-btn" onClick={() => Navigate(Routes.contact)}>Connect with us</button>
                </div>
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
                    <span>Co-owner</span>
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
                    <span>Co-owner</span>
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
                    <span>Co-owner</span>
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
      </div>
    );
  }
}

export default About;
