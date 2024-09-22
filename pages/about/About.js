import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="aboutpage">
        <div className="container">
          <div className="about-inner">
            <div className="zigzag">
              <div className="zigzag-img">
                <img src="dummy.svg" alt="Dummy" />
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
                  WHO–GMP Certified Company - Sanitas Healthcare is occupied in
                  the manufacturing of different range of Nutraceuticals
                  products (Tablets, Capsules, Powders, Syrup etc.)
                </p>
                <p>
                  We at Sanitas Healthcare work at a state of the art
                  manufacturing facility in Gujarat with large scale capacity
                  for wide range of Nutraceuticals products.
                </p>
                <div className="our-work">
                    <p><FontAwesomeIcon icon={faCheck} />State of the art manufacturing unit</p>
                    <p><FontAwesomeIcon icon={faCheck} />In house F&D facility</p>
                    <p><FontAwesomeIcon icon={faCheck} />All dosage form at one place</p>
                </div>
                <button className="prm-btn">Connect with us</button>
              </div>
            </div>
            <div className="team">
              <h2>Our team</h2>
              <div className="team-inner">
                <div className="team-card">
                  <div className="team-img">
                    <img src="Devendra-Patel.jpg" alt="Devendra Patel"/>
                  </div>
                  <div className="team-text">
                    <h3>Devendra Patel</h3>
                    <span>Co-owner</span>
                    <p>Bachlore in PharmacyManager, Formulation & Development</p>
                  </div>
                </div>
                <div className="team-card">
                  <div className="team-img">
                    <img src="Tapan-Patel.jpg" alt="Tapan Patel"/>
                  </div>
                  <div className="team-text">
                    <h3>Tapan Patel</h3>
                    <span>Co-owner</span>
                    <p>Master in PharmacyHOD, Sales</p>
                  </div>
                </div>
                <div className="team-card">
                  <div className="team-img">
                    <img src="Vikram-Patel.jpg" alt="Vikram Patel"/>
                  </div>
                  <div className="team-text">
                    <h3>Vikram Patel</h3>
                    <span>Co-owner</span>
                    <p>Bachlore in PharmacyHOD, Production</p>
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
