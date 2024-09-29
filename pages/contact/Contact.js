import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import CommonServices from "../../services/axios/apiServices/CommonServices";
import { isValidForm, validate } from "../../utils/validations/CommonValidator";
import ValidationText from "../../utils/validations/ValidationText";
import { Messages } from "../../utils/Messages";
import SwalServices from "../../services/swal/SwalServices";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.CommonServices = new CommonServices();
    this.SwalServices = new SwalServices();
    this.state = {
      contactDetails: {
        name: "",
        email: "",
        mobileNo: "",
        message: "",
        adminEmail: "fenil9737@gmail.com",
        emailtemplateId: 3,
      },
      isLoading: false,
      validationRules: {
        name: [
          {
            type: "require",
            message: Messages.CommonValidationMessages.FieldRequired.replace(
              "{0}",
              "name"
            ),
          },
        ],
        email: [
          {
            type: "require",
            message: Messages.CommonValidationMessages.FieldRequired.replace(
              "{0}",
              "email"
            ),
          },
          {
            type: "email",
            message: Messages.CommonValidationMessages.FieldRequired.replace(
              "{0}",
              "valid email"
            ),
          },
        ],
        mobileNo: [
          {
            type: "require",
            message: Messages.CommonValidationMessages.FieldRequired.replace(
              "{0}",
              "mobile number"
            ),
          },
        ],
        message: [
          {
            type: "require",
            message: Messages.CommonValidationMessages.FieldRequired.replace(
              "{0}",
              "message"
            ),
          },
        ],
      },
      validState: {
        isValid: true,
        error: {},
      },
    };
  }

  handleChange = (event, name) => {
    let value = event.target.value;
    let details = this.state.contactDetails;
    details[name] = value;
    this.setState({ contactDetails: details });
  };

  validateField = (key) => {
    const newValidState = validate(
      key,
      this.state.contactDetails,
      this.state.validationRules,
      this.state.validState
    );
    this.setState({ validState: newValidState });
    return newValidState.isValid;
  };

  isAllvalidateField = () => {
    const newValidState = isValidForm(
      this.state.contactDetails,
      this.state.validationRules,
      this.state.validState
    );
    this.setState({ validState: newValidState });
    return newValidState.isValid;
  };

  sendInquiryToAdmin = () => {
    let isAllvalidateField = this.isAllvalidateField();
    if (isAllvalidateField) {
      this.setState({ isLoading: true });
      let details = this.state.contactDetails;
      this.CommonServices.sendInquiryToAdmin(details).then((response) => {
        if (response.statusCode === 200 && response.responseItem != null) {
          this.setState({ isLoading: false });
          this.SwalServices.Success(
            "Message sent successfully, Our team will get back to you soon"
          );
        } else {
          this.SwalServices.Error(
            "Something went wrong please contact zyden.itsolutions@gmail.com, Thank you"
          );
          this.setState({ isLoading: false });
        }
        this.setState({ isLoading: false });
      });
    }
  };

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
                  <div>
                    <input
                      type="text"
                      placeholder="name*"
                      id="name"
                      name="name"
                      value={this.state.contactDetails.name}
                      onChange={(event) => this.handleChange(event, "name")}
                      onBlur={() => this.validateField("name")}
                    />
                    <ValidationText error={this.state.validState.error.name} />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={this.state.contactDetails.email}
                      onChange={(event) => this.handleChange(event, "email")}
                      onBlur={() => this.validateField("email")}
                    />
                    <ValidationText error={this.state.validState.error.email} />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile no.*"
                      pattern="[0-9]{10}"
                      id="mobileNo"
                      name="mobileNo"
                      value={this.state.contactDetails.mobileNo}
                      onChange={(event) => this.handleChange(event, "mobileNo")}
                      onBlur={() => this.validateField("mobileNo")}
                    />
                    <ValidationText
                      error={this.state.validState.error.mobileNo}
                    />
                  </div>
                </div>
                <div className="user-msg">
                  <textarea
                    placeholder="Message"
                    id="message"
                    name="message"
                    value={this.state.contactDetails.message}
                    onChange={(event) => this.handleChange(event, "message")}
                    onBlur={() => this.validateField("message")}
                  ></textarea>
                  <ValidationText error={this.state.validState.error.message} />
                </div>
                {this.state.isLoading === true ? (
                  <button
                    className="prm-btn"
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    className="prm-btn"
                    onClick={() => this.sendInquiryToAdmin()}
                  >
                    Send message
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
