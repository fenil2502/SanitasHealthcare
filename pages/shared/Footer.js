import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-col-1">
                <img src="Sanitash_logo.svg" alt="Sanitas Healthcare" />
                <p>Your guide to a healthier, happier life.</p>
              </div>
              <div className="footer-col-2">
                <h5>Quick Links</h5>
                <ul className="footer-links">
                  <li onClick={() => Navigate(Routes.home)}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                    Home
                  </li>
                  <li onClick={() => Navigate(Routes.about)}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                    About
                  </li>
                  <li onClick={() => Navigate(Routes.portfolio)}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                    Portfolio
                  </li>
                  <li onClick={() => Navigate(Routes.contact)}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                    Contact
                  </li>
                </ul>
              </div>
              <div className="footer-col-3">
                <h5>Connect With Us</h5>
                <div className="connect-box">
                  <div className="connect-details">
                    <div className="connect-title">
                      <div className="connect-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </div>
                      <h6>Address</h6>
                    </div>
                    <p>
                      753-Nidhi Industrial Estate, Rakanpur, Kalol, Gandhinagar,
                      382721, India
                    </p>
                  </div>
                  <div className="connect-details">
                    <div className="connect-title">
                      <div className="connect-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <h6>Email</h6>
                    </div>
                    <a href="mailto:info@sanitashealthcare.com">
                      info@sanitashealthcare.com
                    </a>
                    <br />
                    <a href="mailto:export@sanitashealthcare.com">
                      export@sanitashealthcare.com
                    </a>
                  </div>
                  <div className="connect-details">
                    <div className="connect-title">
                      <div className="connect-icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <h6>Contact</h6>
                    </div>
                    <a href="tel:+919687361880">+91-9687361880</a>
                    <br />
                    <a href="tel:+919426829676">+91-9426829676</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <p>
                Copyright &copy; 2024 Sanitas Healthcare. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
