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
                <img src="Sanitash_logo.svg" alt="Sanitas Healthcare" onClick={() => Navigate(Routes.home)}/>
                <p>Your guide to a healthier, happier life.</p>
                <div className="social-media">
                  <a
                    href="https://www.facebook.com/people/Sanitas-Healthcare/100091492130628/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://www.instagram.com/sanitashealthcare?igsh=YTBycW5nc2lzd3Rl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              <div className="footer-col-2">
                <h4>Quick Links</h4>
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
                <h4>Connect With Us</h4>
                <div className="connect-box">
                  <div className="connect-details">
                    <div className="connect-title">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <h5>Address</h5>
                    </div>
                    <p>
                      753-Nidhi Industrial Estate, Rakanpur, Kalol, Gandhinagar,
                      382721, India
                    </p>
                  </div>
                  <div className="connect-details">
                    <div className="connect-title">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <h5>Email</h5>
                    </div>
                    <a href="mailto:info@sanitashealthcare.in">
                      info@sanitashealthcare.in
                    </a>
                    <br />
                    <a href="mailto:export@sanitashealthcare.in">
                      export@sanitashealthcare.in
                    </a>
                  </div>
                  <div className="connect-details">
                    <div className="connect-title">
                      <FontAwesomeIcon icon={faPhone} />
                      <h5>Contact</h5>
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
                Copyright &copy; 2022 Sanitas Healthcare. All rights are
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
