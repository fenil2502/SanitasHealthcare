import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  ArrowRight,
  Clock,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import CommonServices from "../../services/axios/apiServices/CommonServices";
import { isValidForm, validate } from "../../utils/validations/CommonValidator";
import ValidationText from "../../utils/validations/ValidationText";
import { Messages } from "../../utils/Messages";
import SwalServices from "../../services/swal/SwalServices";

const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Sanitas+Healthcare,+753+Nidhi+Industrial+Estate,+Rakanpur,+Kalol,+Gandhinagar+382721";

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
        adminEmail: "sanitashealthcareinfo@gmail.com",
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

  resetForm = () => {
    this.setState({
      contactDetails: {
        ...this.state.contactDetails,
        name: "",
        email: "",
        mobileNo: "",
        message: "",
      },
      validState: { isValid: true, error: {} },
    });
  };

  sendInquiryToAdmin = () => {
    let isAllvalidateField = this.isAllvalidateField();
    if (isAllvalidateField) {
      this.setState({ isLoading: true });
      let details = this.state.contactDetails;
      this.CommonServices.sendInquiryToAdmin(details).then((response) => {
        if (response.statusCode === 200 && response.responseItem != null) {
          this.setState({ isLoading: false });
          this.resetForm();
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

  fieldClass = (key) => {
    return this.state.validState.error[key] ? "field has-error" : "field";
  };

  render() {
    const { contactDetails, validState, isLoading } = this.state;

    return (
      <div className="contactpage">
        {/* ---------- Hero ---------- */}
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-inner">
              <span className="section-eyebrow">Contact</span>
              <h1>
                Get in touch with <span>Sanitas Healthcare</span>
              </h1>
              <p>
                Tell us what you are planning and our team will come back with
                answers on formulation, dosage forms and timelines.
              </p>

            </div>
          </div>
        </section>

        {/* ---------- Form + details ---------- */}
        <section className="contact-sec">
          <div className="container">
            <div className="contact-grid">
              {/* Form */}
              <div className="contact-form-card">
                <div className="card-head">
                  <h2>Send us a message</h2>
                  <p>We usually reply within one working day.</p>
                </div>

                <div className="form">
                  <div className="field-row">
                    <div className={this.fieldClass("name")}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        autoComplete="name"
                        value={contactDetails.name}
                        onChange={(event) => this.handleChange(event, "name")}
                        onBlur={() => this.validateField("name")}
                      />
                      <label htmlFor="name">
                        Full name <i>*</i>
                      </label>
                      <ValidationText error={validState.error.name} />
                    </div>

                    <div className={this.fieldClass("email")}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        autoComplete="email"
                        value={contactDetails.email}
                        onChange={(event) => this.handleChange(event, "email")}
                        onBlur={() => this.validateField("email")}
                      />
                      <label htmlFor="email">
                        Email address <i>*</i>
                      </label>
                      <ValidationText error={validState.error.email} />
                    </div>
                  </div>

                  <div className={this.fieldClass("mobileNo")}>
                    <input
                      type="tel"
                      id="mobileNo"
                      name="mobileNo"
                      placeholder=" "
                      pattern="[0-9]{10}"
                      autoComplete="tel"
                      value={contactDetails.mobileNo}
                      onChange={(event) => this.handleChange(event, "mobileNo")}
                      onBlur={() => this.validateField("mobileNo")}
                    />
                    <label htmlFor="mobileNo">
                      Mobile number <i>*</i>
                    </label>
                    <ValidationText error={validState.error.mobileNo} />
                  </div>

                  <div className={this.fieldClass("message") + " field-area"}>
                    <textarea
                      id="message"
                      name="message"
                      rows="8"
                      placeholder=" "
                      value={contactDetails.message}
                      onChange={(event) => this.handleChange(event, "message")}
                      onBlur={() => this.validateField("message")}
                    />
                    <label htmlFor="message">
                      Your message <i>*</i>
                    </label>
                    <ValidationText error={validState.error.message} />
                  </div>

                  <button
                    type="button"
                    className={
                      isLoading ? "submit-btn is-loading" : "submit-btn"
                    }
                    disabled={isLoading}
                    onClick={() => this.sendInquiryToAdmin()}
                  >
                    {isLoading ? (
                      <React.Fragment>
                        <LoaderCircle size="1em" className="spin" />
                        Sending
                      </React.Fragment>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </div>

              {/* Details */}
              <aside className="contact-aside">
                <div className="detail-row">
                  <span className="detail-icon">
                    <MapPin size="1em" />
                  </span>
                  <div className="detail-body">
                    <h3>Address</h3>
                    <p>
                      753-Nidhi Industrial Estate, Rakanpur, Kalol,
                      Gandhinagar-382721, India
                    </p>
                  </div>
                </div>

                <div className="detail-row">
                  <span className="detail-icon">
                    <Phone size="1em" />
                  </span>
                  <div className="detail-body">
                    <h3>Phone</h3>
                    <a href="tel:+919687361880">+91-9687361880</a>
                    <a href="tel:+919426829676">+91-9426829676</a>
                    <a href="tel:+919974875537">+91-9974875537</a>
                  </div>
                </div>

                <div className="detail-row">
                  <span className="detail-icon">
                    <Mail size="1em" />
                  </span>
                  <div className="detail-body">
                    <h3>Email</h3>
                    <a href="mailto:sanitashealthcareinfo@gmail.com">
                      sanitashealthcareinfo@gmail.com
                    </a>
                    <a href="mailto:info@sanitashealthcare.in">
                      info@sanitashealthcare.in
                    </a>
                  </div>
                </div>

                <div className="detail-row">
                  <span className="detail-icon">
                    <Clock size="1em" />
                  </span>
                  <div className="detail-body">
                    <h3>Working hours</h3>
                    <p>Monday to Saturday, 08:00 am to 08:00 pm</p>
                    <p className="muted">Sunday closed</p>
                  </div>
                </div>

                <div className="detail-social">
                  <a
                    href="https://www.facebook.com/people/Sanitas-Healthcare/100091492130628/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://www.instagram.com/sanitashealthcare?igsh=YTBycW5nc2lzd3Rl"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ---------- Map ---------- */}
        <section className="contact-map-sec">
          <div className="container">
            <div className="map-head">
              <div className="map-head-title">
                <span className="section-eyebrow">Find us</span>
                <h2>Our location</h2>
              </div>
              <a href={MAP_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Get directions
                <ArrowRight size="1em" />
              </a>
            </div>
            <div className="map-shell">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.841651710847!2d72.47901561135409!3d23.10289177903038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9da63372eef3%3A0xf8e7767d96d8fdce!2sSanitas%20Healthcare!5e0!3m2!1sen!2sin!4v1726817008146!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map: Sanitas Healthcare"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
