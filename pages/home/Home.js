import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
          <div className="zigzag">
            <div className="container">
              <div className="zigzag-inner">
                <div className="zigzag-img">
                  <img src="dummy.svg" alt="Dummy" />
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
                    <span>Tablet dosage form</span>
                    <p>
                      Chewable tablets, Mouth dissolving tablets, Effervescent
                      tablets, Coated tablets, DT tablets
                    </p>
                  </div>
                  <div className="card">
                    <span>Tablet dosage form</span>
                    <p>
                      Chewable tablets, Mouth dissolving tablets, Effervescent
                      tablets, Coated tablets, DT tablets
                    </p>
                  </div>
                  <div className="card">
                    <span>Tablet dosage form</span>
                    <p>
                      Chewable tablets, Mouth dissolving tablets, Effervescent
                      tablets, Coated tablets, DT tablets
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
          <div className="card-col-rev">
            <div className="container">
              <div className="card-col-rev-inner">
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
                <div className="four-card">
                  <div className="card">
                    <span>Tablet dosage form</span>
                    <p>
                      Chewable tablets, Mouth dissolving tablets, Effervescent
                      tablets, Coated tablets, DT tablets
                    </p>
                  </div>
                  <div className="card">
                    <span>Tablet dosage form</span>
                    <p>
                      Chewable tablets, Mouth dissolving tablets, Effervescent
                      tablets, Coated tablets, DT tablets
                    </p>
                  </div>
                  <div className="card">
                    <span>Tablet dosage form</span>
                    <p>
                      Chewable tablets, Mouth dissolving tablets, Effervescent
                      tablets, Coated tablets, DT tablets
                    </p>
                  </div>
                  <div className="card">
                    <span>Tablet dosage form</span>
                    <p>
                      Chewable tablets, Mouth dissolving tablets, Effervescent
                      tablets, Coated tablets, DT tablets
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
                  <h3>Step 01</h3>
                  <h4>One to one meeting</h4>
                </div>
                <div className="step-card">
                  <h3>Step 02</h3>
                  <h4>Discussion for product & business development</h4>
                </div>
                <div className="step-card">
                  <h3>Step 03</h3>
                  <h4>Order generation</h4>
                </div>
                <div className="step-card">
                  <h3>Step 04</h3>
                  <h4>P.O. approval</h4>
                </div>
                <div className="step-card">
                  <h3>Step 05</h3>
                  <h4>Art work, design selection(2-3 days)</h4>
                </div>
                <div className="step-card">
                  <h3>Step 06</h3>
                  <h4>Printing work(Foil, Label, Box)(10-15 days)</h4>
                </div>
                <div className="step-card">
                  <h3>Step 07</h3>
                  <h4>Manufacturinbg process(10-15 days)</h4>
                </div>
                <div className="step-card">
                  <h3>Step 08</h3>
                  <h4>Dispatch of goods(1-2 days)</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div className="container">
              <div className="portfolio-heading">
                <h2>Portfolio</h2>
                <Link href="/portfolio">Explore more</Link>
              </div>
              <div className="portfolio-inner">
                <div className="big-card">
                  <div className="bc-img">
                    <img src="dummy.svg" alt="Dummy" />
                  </div>
                  <div className="bc-text">
                    <h3>Gynec Infertility Supply</h3>
                    <p>
                      Multi amins, Mineral with Omega 3 Fatty Acid, Iron
                      Supplement- L-Methyl Folate, Methylcobalamine, Pyridoxine
                      with Phosphate, Ferrous Bisglycinate, Mangenese, Vit. B2,
                      Copper, Folic Acid, Vit. B12, Ferrous Ascorbate, Folic
                      Acid, Zinc Sulphate.
                    </p>
                    <button className="download-btn">
                      Know More
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                  </div>
                </div>
                <div className="two-cards">
                  <div className="card">
                    <div className="card-img">
                      <img src="dummy.svg" alt="DUmmy" />
                    </div>
                    <div className="card-text">
                      <h3>Orthopedic Suppliments</h3>
                      <p>
                        Products that supports bone growth Formulations with
                        Calcium Supplement like Calcium Citrate, Calcium
                        Carbonate, Calcitrol, Vitamin D, Minerals; Vitamin D,
                        Magnesium, Zinc Folic Acid, Methylcobalamin, Vitamin
                        K27, Calcitrol, Glucosamine, Diacerein, Boswellia
                        Serrata Extract, Rosehip Ext, Cissus Quadrangularis,
                        Collagen Peptide, Sodium Hyaluronate, Vitamin C,
                        L-Arginine, Chondrotine and many more.
                      </p>
                      <button className="download-btn">
                        Know More
                        <FontAwesomeIcon icon={faArrowDown} />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-img">
                      <img src="dummy.svg" alt="DUmmy" />
                    </div>
                    <div className="card-text">
                      <h3>Gastro Intestinal Supplements</h3>
                      <p>
                        Mammal Milk, Enzymes (Pre & Pro Biotics), Multivitamin,
                        Amino Acid, Mineral Saccaromyces Boulardi, Fructo
                        Oligosaccharides, Clostridum, Butydcum, Lactobacillus
                        Rhamnosus, Bifidobacterium Blidum„ Bifidobacteriorn
                        Longum, Streptococcus Thermophilus & Lactobacillus
                        Acidophilus...
                      </p>
                      <button className="download-btn">
                        Know More
                        <FontAwesomeIcon icon={faArrowDown} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
