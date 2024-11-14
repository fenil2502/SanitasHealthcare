import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfoliopage">
        <div className="banner">
          <div className="container">
            <div className="banner-inner">
              <h1>Our portfolio</h1>
            </div>
          </div>
        </div>
        <div className="text-media-sec">
          <div className="container">
            <h2>Supplements We Make</h2>
            <div className="supplements-cards">
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="Ortho_supplements_Sanitus_Profile.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img src="ortho.jpg" alt="Orthopedic" />
                  </div>
                  <div className="product-card-text">
                    <h3>Orthopedic Suppliments</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="Immun.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img src="Immunity-Supplements.jpg" alt="Immunity" />
                  </div>
                  <div className="product-card-text">
                    <h3>Immunity Supplements</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="Gynec_infertility_Supply.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img
                      src="Gynec-Infertility-Supply.jpg"
                      alt="Gynec Infertility"
                    />
                  </div>
                  <div className="product-card-text">
                    <h3>Gynec Infertility Supplements</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="Pediatric_Supply.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img src="Pediatric-Supplement.jpg" alt="Pediatric" />
                  </div>
                  <div className="product-card-text">
                    <h3>Pediatric Supplement</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="gastro_liver_supply.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img
                      src="Gastro-Intestinal-Supplements.jpg"
                      alt="Gastro Intestinal"
                    />
                  </div>
                  <div className="product-card-text">
                    <h3>Gastro Intestinal Supplements</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="gastro_liver_supply.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img src="Liver-supplements.jpg" alt="Liver" />
                  </div>
                  <div className="product-card-text">
                    <h3>Liver Supplements</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="UTI_Skin_supply.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img src="Skin-hair-Supplement.jpg" alt="Skin and Hair" />
                  </div>
                  <div className="product-card-text">
                    <h3>Skin & hair Supplement</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="UTI_Skin_supply.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img src="uti-supp.jpg" alt="UTI" />
                  </div>
                  <div className="product-card-text">
                    <h3>UTI Supplement</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="UTI_Skin_supply.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img src="Appetizer.jpg" alt="Appetizer" />
                  </div>
                  <div className="product-card-text">
                    <h3>Appetizer</h3>
                  </div>
                </a>
              </div>
              <div className="product-card">
                <a
                  className="product-card-inner"
                  href="Protein supply.pdf"
                  target="_blank"
                >
                  <div className="product-card-img">
                    <img src="Protein-Supplement.jpg" alt="Protein" />
                  </div>
                  <div className="product-card-text">
                    <h3>Protein Supplement</h3>
                  </div>
                </a>
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
              <button className="cta-btn">
                <img src="contact-support.svg" alt="Contact" />
                Contact now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
