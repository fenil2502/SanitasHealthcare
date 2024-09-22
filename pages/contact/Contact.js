import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    return (
      <div className="contactpage">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-top">
              <div className="contact-details">
                <div className="contact-heading">
                  <h1>How can we help you?</h1>
                  <p>With just few details we will be able to respond you.</p>
                </div>
                <div className="contact-address">
                  <h2>
                    753-Nidhi Industrial Estate, Rakanpur, Kalol,
                    Gandhinagar-382721, India
                  </h2>
                  <span>
                    <strong>Monday - Saturday:</strong> 08:00am to 08:00pm
                  </span>
                  <br />
                  <span>
                    <strong>Sunday:</strong> Holiday
                  </span>
                  <div className="mobile-no">
                    <h3>Talk to us:</h3>
                    <a href="tel:+919687361880">+91-9687361880</a>
                    <br />
                    <a href="tel:+919426829676">+91-9426829676</a>
                  </div>
                  <div className="mail-id">
                    <h3>Mail us on:</h3>
                    <a href="mailto:info@sanitashealthcare.in">
                      info@sanitashealthcare.in
                    </a>
                    <br />
                    <a href="mailto:export@sanitashealthcare.in">
                      export@sanitashealthcare.in
                    </a>
                  </div>
                </div>
                <div className="social-media"></div>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.841651710847!2d72.47901561135409!3d23.10289177903038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9da63372eef3%3A0xf8e7767d96d8fdce!2sSanitas%20Healthcare!5e0!3m2!1sen!2sin!4v1726817008146!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map: Senitaas Healthcare"
                />
              </div>
            </div>
            <div className="contact-bottom">
              <h4>Fill up the form if you have any question</h4>
              <div className="form">
                <div className="user-details">
                  <input placeholder="Name" />
                  <input placeholder="Email" />
                  <input placeholder="Mobile no." />
                </div>
                <div className="user-msg">
                  <textarea placeholder="Message"></textarea>
                </div>
                <button>Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
