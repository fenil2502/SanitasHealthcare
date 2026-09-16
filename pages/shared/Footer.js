import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { MapPinIcon, SealCheckIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Navigate, Routes } from "../../navigation/NavigationLib";
import { SupplementCategories } from "../../utils/SupplementCategories";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const MAP_URL = "https://maps.app.goo.gl/YnxaeFRxyrLZxm3x9";

/* every category, listed in two columns. "Supplements" is dropped from each
   label since the column heading already says it. */
const RANGE_LINKS = SupplementCategories.map((category) => ({
  ...category,
  shortLabel: category.label.replace(/ Supplements?$/, ""),
}));

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-brand">
                <img
                  className="footer-logo"
                  src="Sanitash_logo_white.png"
                  alt="Sanitas Healthcare"
                  onClick={() => Navigate(Routes.home)}
                />

                <p>
                  Nutraceutical manufacturing and contract development, from
                  formulation through to finished pack.
                </p>

                <span className="footer-badge">
                  <SealCheckIcon size={16} weight="fill" />
                  WHO&ndash;GMP certified facility
                </span>

                <div className="social-media">
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
              </div>

              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        <a>
                          <FontAwesomeIcon icon={faAnglesRight} />
                          {link.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-col footer-range">
                <h4>Our Range</h4>
                <ul className="footer-links">
                  {RANGE_LINKS.map((category) => (
                    <li key={category.key}>
                      <Link href={category.route.urlPath}>
                        <a>
                          <FontAwesomeIcon icon={faAnglesRight} />
                          {category.shortLabel}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-col footer-contact">
                <h4>Get in Touch</h4>

                <ul>
                  <li>
                    <span className="contact-icon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <div className="contact-body">
                      <span className="contact-label">Address</span>
                      <a
                        className="contact-address"
                        href={MAP_URL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        753-Nidhi Industrial Estate, Rakanpur, Kalol,
                        Gandhinagar, 382721, India
                      </a>
                      <a
                        className="contact-directions"
                        href={MAP_URL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MapPinIcon size={13} weight="fill" />
                        View on Google Maps
                      </a>
                    </div>
                  </li>

                  <li>
                    <span className="contact-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <div className="contact-body">
                      <span className="contact-label">Email</span>
                      <a href="mailto:sanitashealthcareinfo@gmail.com">
                        sanitashealthcareinfo@gmail.com
                      </a>
                      <a href="mailto:info@sanitashealthcare.in">
                        info@sanitashealthcare.in
                      </a>
                    </div>
                  </li>

                  <li>
                    <span className="contact-icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <div className="contact-body">
                      <span className="contact-label">Phone</span>
                      <a href="tel:+919687361880">+91-9687361880</a>
                      <a href="tel:+919426829676">+91-9426829676</a>
                      <a href="tel:+919974875537">+91-9974875537</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-copyright">
              <p>&copy; 2026 Sanitas Nutraceuticals. All rights reserved.</p>
              <p className="footer-credit">
                Developed by
                <a
                  href="https://www.zyden-it.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/Zyden.svg" alt="Zyden IT Solutions" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
