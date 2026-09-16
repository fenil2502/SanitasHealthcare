import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faShieldHalved,
  faIndustry,
  faCapsules,
  faFlask,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

class About extends Component {
  render() {
    return (
      <div className="aboutpage">
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-inner">
              <span className="section-eyebrow">About us</span>
              <h1>
                Inside <span>Sanitas Healthcare</span>
              </h1>
              <p>
                A WHO&ndash;GMP certified nutraceutical manufacturer in Gujarat,
                producing tablets, capsules, powders and syrups for brands
                across India and abroad.
              </p>
            </div>
          </div>
        </section>
        <div className="about-sec">
          <div className="container">
            <div className="about-inner">
              <div className="about-visual">
                <div className="visual-frame">
                  <img src="sanitas-about.jpg" alt="Sanitas Healthcare" />
                </div>
                <span className="dot-grid" />
              </div>

              <div className="about-copy">
                <span className="section-eyebrow">Why Sanitas</span>
                <h2>
                  We At <span>Sanitas</span>
                </h2>
                <p>
                  Sanitas Healthcare is occupied in the manufacturing of different range of nutraceuticals products. We at Sanitas Healthcare work at a state of the art manufacturing facility in Gujarat with large scale capacity for wide range of nutraceuticals products.
                </p>
                <button
                  className="learn-more"
                  onClick={() => Navigate(Routes.portfolio)}
                >
                  Learn more
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>

              <div className="about-highlights">
                <div className="highlight-card">
                  <span className="hl-icon">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </span>
                  <h3>Quality Assurance</h3>
                  <p>Strict quality control at every step</p>
                </div>
                <div className="highlight-card">
                  <span className="hl-icon">
                    <FontAwesomeIcon icon={faIndustry} />
                  </span>
                  <h3>Modern Facility</h3>
                  <p>State of the art manufacturing unit</p>
                </div>
                <div className="highlight-card">
                  <span className="hl-icon">
                    <FontAwesomeIcon icon={faCapsules} />
                  </span>
                  <h3>All Dosage Forms</h3>
                  <p>Tablets, capsules, powders and syrups</p>
                </div>
                <div className="highlight-card">
                  <span className="hl-icon">
                    <FontAwesomeIcon icon={faFlask} />
                  </span>
                  <h3>In-House F&amp;D</h3>
                  <p>Science-driven formulation and development</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="vision-mission">
          <div className="container">
            <div className="vm-inner">
              <div className="vm-card">
                <div className="vm-img">
                  <img src="mission.png" alt="Mission" />
                </div>
                <div className="vm-text">
                  <span className="vm-rule" />
                  <h3>Mission</h3>
                  <p>
                    To be a benchmark in manufacturing practices for production
                    of nutraceuticals healthcare products, and to dedicate
                    ourselves to humanity&rsquo;s quest for longer, healthier,
                    happier lives.
                  </p>
                </div>
              </div>

              <div className="vm-card vm-card-alt">
                <div className="vm-img">
                  <img src="vision.png" alt="Vision" />
                </div>
                <div className="vm-text">
                  <span className="vm-rule" />
                  <h3>Vision</h3>
                  <p>
                    To provide affordable and innovative health supplement
                    products for the better well-being of society and to be a
                    vital part in nation building.
                  </p>
                </div>
              </div>

              <div className="vm-card">
                <div className="vm-img">
                  <img src="value.png" alt="Core Value" />
                </div>
                <div className="vm-text">
                  <span className="vm-rule" />
                  <h3>Core Value</h3>
                  <p>
                    Quality, transparency and consistency guide every batch we
                    make, from in-house formulation through to final packaging.
                  </p>
                </div>
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
        <div className="contact-cta">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-text">
                <h2>
                  Want More Information? Let’s Connect – Contact Us Today!
                </h2>
                <p>
                  Our friendly and knowledgeable team is ready to help. Reach
                  out for inquiries, support, or to learn more about our
                  products.
                </p>
              </div>
              <button
                className="cta-btn"
                onClick={() => Navigate(Routes.contact)}
              >
                <img src="contact-support.svg" alt="Contact" />
                Contact now
              </button>
            </div>
          </div>
        </div>
        <div className="how-we-work">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">Our process</span>
              <h2>How we work</h2>
            </div>
            <div className="hww-inner">
              <div className="step-card">
                <h3>01</h3>
                <h4>One to one meeting with customer</h4>
              </div>
              <div className="step-card">
                <h3>02</h3>
                <h4>Discussion for product & Business Development</h4>
              </div>
              <div className="step-card">
                <h3>03</h3>
                <h4>Order generation</h4>
              </div>
              <div className="step-card">
                <h3>04</h3>
                <h4>P.O. approval</h4>
              </div>
              <div className="step-card">
                <h3>08</h3>
                <h4>Dispatch of goods(1-2 days)</h4>
              </div>
              <div className="step-card">
                <h3>07</h3>
                <h4>Manufacturing process(10-15 days)</h4>
              </div>
              <div className="step-card">
                <h3>06</h3>
                <h4>Printing work(Foil, Label, Box)(10-15 days)</h4>
              </div>
              <div className="step-card">
                <h3>05</h3>
                <h4>Art work, design selection(2-3 days)</h4>
              </div>
            </div>
            <div className="hww-inner-tablet">
              <div className="step-card">
                <h3>01</h3>
                <h4>One to one meeting</h4>
              </div>
              <div className="step-card">
                <h3>02</h3>
                <h4>Discussion for product & business development</h4>
              </div>
              <div className="step-card">
                <h3>03</h3>
                <h4>Order generation</h4>
              </div>
              <div className="step-card">
                <h3>06</h3>
                <h4>Printing work(Foil, Label, Box)(10-15 days)</h4>
              </div>
              <div className="step-card">
                <h3>05</h3>
                <h4>Art work, design selection(2-3 days)</h4>
              </div>
              <div className="step-card">
                <h3>04</h3>
                <h4>P.O. approval</h4>
              </div>
              <div className="step-card">
                <h3>07</h3>
                <h4>Manufacturinbg process(10-15 days)</h4>
              </div>
              <div className="step-card">
                <h3>08</h3>
                <h4>Dispatch of goods(1-2 days)</h4>
              </div>
            </div>
            <div className="hww-inner-mobile">
              <div className="step-card">
                <h3>01</h3>
                <h4>One to one meeting</h4>
              </div>
              <div className="step-card">
                <h3>02</h3>
                <h4>Discussion for product & business development</h4>
              </div>
              <div className="step-card">
                <h3>03</h3>
                <h4>Order generation</h4>
              </div>
              <div className="step-card">
                <h3>04</h3>
                <h4>P.O. approval</h4>
              </div>
              <div className="step-card">
                <h3>05</h3>
                <h4>Art work, design selection(2-3 days)</h4>
              </div>
              <div className="step-card">
                <h3>06</h3>
                <h4>Printing work(Foil, Label, Box)(10-15 days)</h4>
              </div>
              <div className="step-card">
                <h3>07</h3>
                <h4>Manufacturinbg process(10-15 days)</h4>
              </div>
              <div className="step-card">
                <h3>08</h3>
                <h4>Dispatch of goods(1-2 days)</h4>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="team">
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
          </div> */}
      </div>
    );
  }
}

export default About;
