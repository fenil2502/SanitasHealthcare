import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Navigate, Routes } from "../../navigation/NavigationLib";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="home-inner">
          <div className="banner">
            <div className="banner-inner">
              <div className="banner-content">
                <h1>Manufacturer of Nutraceuticals Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="prm-btn" onClick={() => Navigate(Routes.about)}>Know more</button>
                <div className="banner-stats">
                  <p>
                    <span>10+</span>Years of
                    <br />
                    experience
                  </p>
                  <p>
                    <span>10</span>Products
                  </p>
                </div>
              </div>
              <div className="banner-img">
                <img src="Home-banner.jpg" alt="Sanitas" />
              </div>
            </div>
          </div>
          <div className="overview-sec">
            <div className="container">
              <div className="overview-inner">
                <div className="overview">
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
                    WHO–GMP Certified Company - Sanitas Healthcare is occupied
                    in the manufacturing of different range of Nutraceuticals
                    products (Tablets, Capsules, Powders, Syrup etc.)
                  </p>
                  <p>
                    We at Sanitas Healthcare work at a state of the art
                    manufacturing facility in Gujarat with large scale capacity
                    for wide range of Nutraceuticals products.
                  </p>
                  <div className="icon-set">
                    <p className="icon-list">
                      <img src="Quality.svg" alt="Quality" />
                      Quality
                    </p>
                    <p className="icon-list">
                      <img src="Consistancy.svg" alt="Consistancy" />
                      Consistancy
                    </p>
                    <p className="icon-list">
                      <img src="Transperancy.svg" alt="Transperancy" />
                      Transperancy
                    </p>
                  </div>
                  <img
                    className="overview-img"
                    src="medicines.jpg"
                    alt="Sanitas Healthcare"
                  />
                  <div className="vision-mission">
                    <div className="vision">
                      <div className="icon-title">
                        <div className="icon">
                          <img src="vision.svg" alt="Vision" />
                        </div>
                        <h3>Vision</h3>
                      </div>
                      <p>
                        To provide affordable and innovative health supplement
                        products for better well-being of a society and be a
                        vital part in nation building.
                      </p>
                    </div>
                    <div className="mission">
                      <div className="icon-title">
                        <div className="icon">
                          <img src="mission.svg" alt="Mission" />
                        </div>
                        <h3>Mission</h3>
                      </div>
                      <p>
                        To be a benchmark in manufacturing practices for
                        production of nutraceuticals healthcare products. To
                        Dedicate ourseleves for humanity’s quest for longer,
                        healthier, happier lives through innovation in
                        medicines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="masonry-sec">
            <div className="container">
              <h2>What We Provide</h2>
              <div className="masonry-inner">
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Tablet.jpg" alt="Tablet dosage" />
                  </div>
                  <h3>Tablet dosage form</h3>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Capsule.jpg" alt="Capsule dosage" />
                  </div>
                  <h3>Capsule dosage form</h3>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Liquid.jpg" alt="Liquid dosage" />
                  </div>
                  <h3>Liquid dosage form</h3>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Powder.jpg" alt="Powder" />
                  </div>
                  <h3>Powder dosage form</h3>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Sachet.jpg" alt="Sachet dosage" />
                  </div>
                  <h3>Dosage in sachets</h3>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Package.jpg" alt="Packing solution" />
                  </div>
                  <h3>Packing solution</h3>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Customized.jpg" alt="Customized solution" />
                  </div>
                  <h3>Customized solution</h3>
                </div>
                <div className="masonry-card">
                  <div className="card-img">
                    <img src="Innovative.jpg" alt="Innovative approach" />
                  </div>
                  <h3>Innovative approach</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="how-we-work">
            <div className="container">
              <h2>How we work</h2>
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
                <button className="cta-btn" onClick={() => Navigate(Routes.contact)}>
                  <img src="contact-support.svg" alt="Contact" />
                  Contact now
                </button>
              </div>
            </div>
          </div>
          <div className="product-sec">
            <div className="container">
              <h2>Our Products</h2>
              <div className="product-inner">
                <div className="product-card">
                  <div className="card-img">
                    <img src="Tablet.jpg" alt="Tablet" />
                  </div>
                  <div className="card-text">
                    <span>Catagory</span>
                    <h3>Product name</h3>
                  </div>
                </div>
                <div className="product-card">
                  <div className="card-img">
                    <img src="Powder.jpg" alt="Powder" />
                  </div>
                  <div className="card-text">
                    <span>Catagory</span>
                    <h3>Product name</h3>
                  </div>
                </div>
                <div className="product-card">
                  <div className="card-img">
                    <img src="Liquid.jpg" alt="Liquid" />
                  </div>
                  <div className="card-text">
                    <span>Catagory</span>
                    <h3>Product name</h3>
                  </div>
                </div>
                <div className="product-card">
                  <div className="card-img">
                    <img src="Sachet.jpg" alt="Sachet" />
                  </div>
                  <div className="card-text">
                    <span>Catagory</span>
                    <h3>Product name</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div className="container">
              <h2>Portfolio</h2>
              <div className="portfolio-inner">
                <div className="zig-zag">
                  <div className="zig-zag-inner">
                    <div className="zig-zag-img">
                      <img src="ortho.jpg" alt="Orthopedic" />
                    </div>
                    <div className="zig-zag-text">
                      <h3>Orthopedic Suppliments</h3>
                      <p>
                        Products that supports bone growth formulations with
                        Calcium Supplement like Calcium Citrate, Calcium
                        Carbonate, Calcitrol, Minerals, Vitamin D, Magnesium,
                        Zinc, Folic Acid, Methylcobalamin, Vitamin K27,
                        Calcitrol, Glucosamine, Diacerein, Boswellia Serrata
                        Extract, Rosehip Ext, Cissus Quadrangularis, Collagen
                        Peptide, Sodium Hyaluronate, Vitamin C, L-Arginine,
                        Chondrotine and many more.
                      </p>
                      <a href="Ortho_supplements_Sanitus_Profile.pdf" target="_blank" className="download-btn">
                        Know more <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="zig-zag-rev">
                  <div className="zig-zag-rev-inner">
                    <div className="zig-zag-rev-img">
                      <img src="Immunity-Supplements.jpg" alt="Immunity" />
                    </div>
                    <div className="zig-zag-rev-text">
                      <h3>Immunity Supplements</h3>
                      <p>
                        Multivitamins, Multiminerals, Extracts
                        formulations-L-Carnitine, L-Arginine, Vitamin C, Iron,
                        Magnesium, Niacinamide, Zinc, L-Glutamic Acid, Vitamin
                        E, Lycopene, L-Glycine, L-Taurine, Vit. B1, Vit. B2,
                        Vit. B5, Vit. B6, B12, Beta Carotene, Copper, Folic
                        Acid, Biotin, Iodine, Vitamin K, Vit. D3, Lutein, Ginkgo
                        Biloba, ALA, DHA, Pycnogenol
                      </p>
                      <a href="Immun.pdf" target="_blank" className="download-btn">
                        Know more <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </div>
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
      </div>
    );
  }
}

export default Home;
