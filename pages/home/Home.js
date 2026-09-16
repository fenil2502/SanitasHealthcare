import React, { useState, Component } from "react";
import {
  faArrowRight,
  faAward,
  faBullseye,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CirclesThreeIcon,
  DropIcon,
  FactoryIcon,
  GrainsIcon,
  JarLabelIcon,
  PillIcon,
  SealCheckIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Navigate, Routes } from "../../navigation/NavigationLib";

/* ZustNutra consumer range - our own retail brand */
const PRODUCTS = [
  {
    name: "Calcium, Magnesium, Zinc+",
    image: "Zustnutra-zinc.png",
  },
  {
    name: "Keto Fat Burner",
    image: "Zustnutra-fat_burner.png",
  },
  {
    name: "L Glutathione",
    image: "Zustnutra-l_glutathione.png",
  },
  {
    name: "Melatonin",
    image: "Zustnutra-melatonin.png",
  },
  {
    name: "Testosterone Booster",
    image: "Zustnutra-testosterone.png",
  },
];

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="home-inner">
          <div className="banner">
            <div className="banner-inner">
              <div className="banner-head">
                <span className="hero-badge">
                  <i className="spark" />
                  <span>
                    Trusted for over <strong>10+ years</strong>
                  </span>
                  <i className="spark" />
                </span>

                <h1>
                  Nutraceuticals Manufacturer
                  <br />
                  &amp; Exporter
                </h1>

                <p>
                  Science-backed formulations made at a WHO&ndash;GMP certified
                  facility in Gujarat, across every dosage form your brand
                  needs.
                </p>

                <button
                  className="hero-btn"
                  onClick={() => Navigate(Routes.about)}
                >
                  Know more
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>

              <div className="hero-stage">
                <span className="stage-ring ring-inner" />
                <span className="stage-arc" />
                <span className="stage-dots dots-left" />
                <span className="stage-dots dots-right" />

                <span className="capsule cap-1" />
                <span className="capsule cap-2" />
                <span className="capsule cap-3" />
                <span className="capsule cap-4" />
                <span className="capsule cap-5" />
                <span className="capsule cap-6" />

                <div className="hero-product">
                  <img src="HomeBanner.png" alt="Sanitas Healthcare" />
                </div>

                <div className="hero-note note-left">
                  <span className="note-dot">
                    <FontAwesomeIcon icon={faBullseye} />
                  </span>
                  <span className="note-text">
                    <strong>ALL DOSAGE FORMS</strong>
                    Tablets, capsules, powders and syrups
                  </span>
                </div>

                <div className="hero-note note-right">
                  <span className="note-dot">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </span>
                  <span className="note-text">
                    <strong>IN-HOUSE F&amp;D</strong>
                    Formulation and development under one roof
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-sec">
            <div className="container">
              <div className="overview">
                <div className="overview-content">
                  <div className="overview-copy">
                    <div className="section-head">
                      <span className="section-eyebrow">Who we are</span>
                      <h2>Sanitas Healthcare</h2>
                      <p>Where healthy life is created</p>
                    </div>

                    <p className="overview-lead">
                      We at Sanitas Healthcare work at a state of the art
                      manufacturing facility in Gujarat with large scale
                      capacity for a wide range of nutraceutical products.
                    </p>

                    <div className="overview-points">
                      <div className="overview-point">
                        <span className="overview-point-icon">
                          <FactoryIcon size={22} weight="duotone" />
                        </span>
                        <div className="overview-point-body">
                          <h3>State of the art facility</h3>
                          <p>
                            Large scale capacity across tablets, capsules,
                            powders and syrups.
                          </p>
                        </div>
                      </div>

                      <div className="overview-point">
                        <span className="overview-point-icon">
                          <SealCheckIcon size={22} weight="duotone" />
                        </span>
                        <div className="overview-point-body">
                          <h3>WHO&ndash;GMP certified</h3>
                          <p>
                            Every batch made to certified quality standards, in
                            house from formulation to pack.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      className="overview-btn"
                      onClick={() => Navigate(Routes.about)}
                    >
                      More about us
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>

                  <div className="overview-visual">
                    <div className="overview-image-shape">
                      <img
                        className="overview-img"
                        src="AboutSanitas.png"
                        alt="Sanitas Healthcare Nutraceutical Products"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-showcase">
            <div className="container">
              <div className="section-head">
                <span className="section-eyebrow">Dosage forms</span>
                <h2>What We Provide</h2>
              </div>

              <div className="product-showcase-layout">

                <div className="showcase-rings" aria-hidden="true">
                  <span className="sc-ring sc-ring-1" />
                  <span className="sc-ring sc-ring-2" />
                  <span className="sc-ring sc-ring-3" />
                </div>

                <svg
                  className="showcase-links"
                  viewBox="0 0 1000 500"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    className="link-line"
                    d="M 300 150 C 385 152, 425 200, 505 262"
                  />
                  <path
                    className="link-line"
                    d="M 300 350 C 385 348, 425 300, 505 238"
                  />
                  <path
                    className="link-line"
                    d="M 700 150 C 615 152, 575 200, 495 262"
                  />
                  <path
                    className="link-line"
                    d="M 700 350 C 615 348, 575 300, 495 238"
                  />
                  <path className="link-dot" d="M 300 150 h 0.01" />
                  <path className="link-dot" d="M 300 350 h 0.01" />
                  <path className="link-dot" d="M 700 150 h 0.01" />
                  <path className="link-dot" d="M 700 350 h 0.01" />
                </svg>

                <div className="showcase-item showcase-item-1">
                  <div className="showcase-icon">
                    <CirclesThreeIcon size={24} weight="duotone" />
                  </div>
                  <div className="showcase-text">
                    <h3>
                      Tablets
                    </h3>
                    <p>Easy and convenient dosage form</p>
                  </div>
                </div>

                <div className="showcase-item showcase-item-2">
                  <div className="showcase-icon">
                    <PillIcon size={24} weight="duotone" />
                  </div>
                  <div className="showcase-text">
                    <h3>
                      Capsules
                    </h3>
                    <p>Precise and convenient delivery</p>
                  </div>
                </div>

                <div className="showcase-center">
                  <img
                    className="showcase-product"
                    src="provide.png"
                    alt="Sanitas Healthcare nutraceutical product"
                  />
                </div>

                <div className="showcase-item showcase-item-3">
                  <div className="showcase-icon">
                    <DropIcon size={24} weight="duotone" />
                  </div>
                  <div className="showcase-text">
                    <h3>
                      Liquids
                    </h3>
                    <p>Flexible and easy-to-use formulations</p>
                  </div>
                </div>

                <div className="showcase-item showcase-item-4">
                  <div className="showcase-icon">
                    <JarLabelIcon size={24} weight="duotone" />
                  </div>
                  <div className="showcase-text">
                    <h3>
                      Powders
                    </h3>
                    <p>Versatile and convenient formulations</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="masonry-card-sec">
            <div className="container">
              <div className="section-head">
                <span className="section-eyebrow">How we work</span>
                <h2>Innovative Customized Approach</h2>
              </div>
              <div className="masonry-inner">
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Package.jpg" alt="Packing solution" />
                  </div>
                  <div className="masonry-card-content">
                    <h3>Packing solution</h3>
                    <p>Smart and secure packaging for every need</p>
                  </div>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Customized.jpg" alt="Customized solution" />
                  </div>
                  <div className="masonry-card-content">
                    <h3>Customized solution</h3>
                    <p>Tailored formulation to match your unique goals</p>
                  </div>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Innovative.jpg" alt="Innovative approach" />
                  </div>
                  <div className="masonry-card-content">
                    <h3>Innovative approach</h3>
                    <p>Forward-thinking solutions for a healthier tomorrow</p>
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
          {/* <div className="products">
            <div className="container">
              <div className="section-head">
                <span className="section-eyebrow">Our own brand</span>
                <h2>Our Products</h2>
                <p>
                  ZustNutra is our consumer range, formulated and packed in the
                  same GMP certified facility we manufacture for.
                </p>
              </div>

              <div className="products-inner">
                {PRODUCTS.map((product, index) => (
                  <article className="product-card" key={product.name}>
                    <span className="product-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="product-card-img">
                      <span className="product-glow" aria-hidden="true" />
                      <span className="product-ring" aria-hidden="true" />
                      <span className="product-stage" aria-hidden="true" />
                      <img
                        className="product-shot"
                        src={product.image}
                        alt={`ZustNutra ${product.name}`}
                      />
                    </div>

                    <div className="product-card-text">
                      <span className="product-brand">ZustNutra</span>
                      <h3>{product.name}</h3>
                      <span
                        className="product-tag"
                        aria-label="Available on Amazon"
                      >
                        <span className="product-tag-copy">
                          Available on
                        </span>
                        <FontAwesomeIcon
                          className="product-tag-amazon"
                          icon={faAmazon}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div> */}
          <div className="portfolio">
            <div className="container">
              <div className="section-head">
                <span className="section-eyebrow">Therapeutic range</span>
                <h2>Supplements We Provide</h2>
              </div>
              <div className="portfolio-inner">
                <div className="product-card">
                  <div
                    className="product-card-inner"
                    onClick={() => Navigate(Routes.orthopedicsupplements)}
                  // href="Ortho_supplements_Sanitus_Profile.pdf"
                  // target="_blank"
                  >
                    <div className="product-card-img">
                      <img src="ortho.jpg" alt="Orthopedic" />
                    </div>
                    <div className="product-card-text">
                      <h3>Orthopedic Supplements</h3>
                    </div>
                  </div>
                </div>
                <div className="product-card">
                  <a
                    className="product-card-inner"
                    // href="Immun.pdf"
                    // target="_blank"
                    onClick={() => Navigate(Routes.immunitysupplements)}
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
                    // href="Gynec_infertility_Supply.pdf"
                    // target="_blank"
                    onClick={() => Navigate(Routes.gynecinfertilitysupplements)}
                  >
                    <div className="product-card-img">
                      <img
                        src="Gynec-Infertility-Supply.jpg"
                        alt="Gynec Infertility"
                      />
                    </div>
                    <div className="product-card-text">
                      <h3>Gynec & Infertility Supplements</h3>
                    </div>
                  </a>
                </div>
                <div className="product-card">
                  <a
                    className="product-card-inner"
                    // href="Pediatric_Supply.pdf"
                    // target="_blank"
                    onClick={() => Navigate(Routes.pediatricsupplements)}
                  >
                    <div className="product-card-img">
                      <img src="Pediatric-Supplement.jpg" alt="Pediatric" />
                    </div>
                    <div className="product-card-text">
                      <h3>Pediatric Supplements</h3>
                    </div>
                  </a>
                </div>
              </div>
              <button
                className="prm-btn"
                onClick={() => Navigate(Routes.portfolio)}
              >
                Visit our portfolio
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
