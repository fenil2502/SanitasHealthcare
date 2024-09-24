import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Navigate, Routes } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="home-inner">
          <div className="banner">
            <div className="banner-outer">
              <div className="container">
                <div className="banner-text">
                  <h1>Manufacturer of Nutraceuticals Products</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="card-col">
            <div className="container">
              <div className="card-col-inner">
                <div className="four-card">
                  <div className="card">
                    <span>Tablet dosage form</span>
                    <p>
                      Chewable tablets, Mouth dissolving tablets, Effervescent
                      tablets, Coated tablets, DT tablets
                    </p>
                  </div>
                  <div className="card">
                    <span>Capsule dosage form</span>
                    <p>Veg capsules, Hard gelatine</p>
                  </div>
                  <div className="card">
                    <span>Liquid dosage form</span>
                    <p>Liquid syrup, 5ml shots, Taste masking syrup</p>
                  </div>
                  <div className="card">
                    <span>Powder dosage form</span>
                    <p>
                      Protein powders including whey protein, soya protein, skim
                      milk protein, energy powder, Free flowing powder
                    </p>
                  </div>
                </div>
                <div className="single-card">
                  <div className="card">
                    <span>We at Sanitas</span>
                    <h3>Mission</h3>
                    <p>
                      To be a benchmark in manufacturing practices for
                      production of nutraceuticals healthcare products. To
                      Dedicate ourseleves for humanity’s quest for longer,
                      healthier, happier lives through innovation in medicines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zigzag">
            <div className="container">
              <div className="zigzag-inner">
                <div className="zigzag-img">
                  <img src="medicines.jpg" alt="Medicine" />
                </div>
                <div className="zigzag-text">
                  <h2>About Sanitas</h2>
                  <p>
                    Sanitas Healthcare is occupied in the manufacturing of
                    different range of nutraceuticals products (Tablets,
                    Capsules, Powders, Syrup etc.)
                  </p>
                  <p>
                    We at Sanitas Healthcare work at a state of the art
                    manufacturing facility in Gujarat with large scale capacity
                    for wide range of nutraceuticals products.
                  </p>
                  <button className="prm-btn">About us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-col-rev">
            <div className="container">
              <div className="card-col-rev-inner">
                <div className="single-card">
                  <div className="card">
                    <span>We at Sanitas</span>
                    <h3>Vision</h3>
                    <p>
                      To provide affordable and innovative health supplement
                      products for better well-being of a society and be a vital
                      part in nation building.
                    </p>
                  </div>
                </div>
                <div className="four-card">
                  <div className="card">
                    <span>Dosage in sachets</span>
                    <p>Sachet with delicious flavour and free flow powder</p>
                  </div>
                  <div className="card">
                    <span>Packing solution</span>
                    <p>
                      Attractive and asthetic packing at special rates from
                      small to large scale production
                    </p>
                  </div>
                  <div className="card">
                    <span>Customized solution</span>
                    <p>Specialist for bespoke formulation service</p>
                  </div>
                  <div className="card">
                    <span>Innovative approach</span>
                    <p>
                      Special attention towards customers demand in new product
                      development
                    </p>
                  </div>
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
          <div className="portfolio">
            <div className="container">
              <h2>Portfolio</h2>
              <div className="portfolio-inner">
                <div className="zigzag">
                  <div className="zigzag-img">
                    <img src="Skin-hair-Supplement.jpg" alt="Skin and Hair" />
                  </div>
                  <div className="zigzag-text">
                    <h3>Skin & hair Supplement</h3>
                    <p>
                      Extract Preparation, Pinebark Ext. (pycnogenol), Moringa
                      Oleifera, Saw Palmetto, Biotin, Msm, lnositol,
                      Zinc,stinging Nettle, Glutamic Acid.dl-methionine,
                      Aspartic Acid, L-lysine, Proline, Serine, Phenylalanine,
                      Isoleucine,valine, Glycine, Tyrosine, Alanine,
                      Threonine,histidine, Cystine...
                    </p>
                    <a className="download-btn" href="./UTI_Skin_supply.pdf" target="_blank" rel="noopener noreferrer">
                      Know More
                      <FontAwesomeIcon icon={faArrowDown} />
                    </a>
                  </div>
                </div>
                <div className="zigzag-rev">
                  <div className="zigzag-rev-img">
                    <img src="Pediatric-Supplement.jpg" alt="Pediatric" />
                  </div>
                  <div className="zigzag-rev-text">
                    <h3>Pediatric Supplement</h3>
                    <p>
                      Enzyme Preparation, Omega-3 Fatty Acid, Amylase, Protease,
                      Lactase, lipase, DHA, L-Lysine HCL, Vitamin C, Vitamin A,
                      E, B1, B2, B3, B5, B6, A, D3, Elemental Zinc, Choline,
                      Biotin, Coenzyme Q10, Vitamin A, E, E1, B2, B3, B5, B6, A,
                      E, C, D3„ Vitamin K1, Biotin, Zinc, Selenium, Sodium...
                    </p>
                    <a  className="download-btn" href="./Pediatric_Supply.pdf" target="_blank" rel="noopener noreferrer">
                      Know More
                      <FontAwesomeIcon icon={faArrowDown} />
                    </a>
                  </div>
                </div>
                <button className="prm-btn">Visit our portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
