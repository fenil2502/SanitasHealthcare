import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfoliopage">
        <div className="portfolio-inner">
          <div className="banner">
            <div className="banner-outer">
              <div className="container">
                <div className="banner-text">
                  <h1>Our portfolio</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-cards">
            <div className="container">
              <div className="zigzag">
                <div className="zigzag-img">
                  <img src="ortho.jpg" alt="Orthoprdic" />
                </div>
                <div className="zigzag-text">
                  <h3>Orthopedic Suppliments</h3>
                  <p>
                    Products that supports bone growth Formulations with Calcium
                    Supplement like Calcium Citrate, Calcium Carbonate,
                    Calcitrol, Vitamin D, Minerals; Vitamin D, Magnesium, Zinc
                    Folic Acid, Methylcobalamin, Vitamin K27, Calcitrol,
                    Glucosamine, Diacerein, Boswellia Serrata Extract, Rosehip
                    Ext, Cissus Quadrangularis, Collagen Peptide, Sodium
                    Hyaluronate, Vitamin C, L-Arginine, Chondrotine and many
                    more.
                  </p>
                  <button className="download-btn">
                    Know More
                    <FontAwesomeIcon icon={faArrowDown} />
                  </button>
                </div>
              </div>
              <div className="two-card">
                <div className="immunity-card">
                  <div className="immunity-img">
                    <img src="Immunity-Supplements.jpg" alt="Immunity" />
                  </div>
                  <div className="immunity-text">
                    <h3>Immunity Supplements</h3>
                    <p>
                      Multivitamins, Multiminerals, Extracts formulations
                      -L-Carnitine, L-Arginine, Vitamin C, Iron, Magnesium,
                      Niacinamide, Zinc, L-Glutamic Acid, Vitamin E, Lycopene,
                      L-Glycine, L-Taurine, Vit. B1, Vit. B2, Vit. B5, Vit. B6,
                      B12, Beta Carotene, Copper, Folic Acid, Biotin, Iodine,
                      Vitamin K, Vit. D3, Lutein, Ginkgo Biloba, ALA, DHA,
                      Pycnogenol
                    </p>
                    <button className="download-btn">
                      Know More
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                  </div>
                </div>
                <div className="gynec-card">
                  <div className="gynec-img">
                    <img src="Gynec-Infertility-Supply.jpg" alt="Gynec" />
                  </div>
                  <div className="gynec-text">
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
              </div>
              <div className="zigzag-rev">
                <div className="zigzag-rev-img">
                  <img src="Pediatric-Supplement.jpg" alt="Pediatric" />
                </div>
                <div className="zigzag-rev-text">
                  <h3>Pediatric Supplement</h3>
                  <p>
                    Enzyme Preparation, Omega-3 Fatty Acid, Amylase, Protease,
                    Lactase, lipase, DHA, L-Lysine HCL, Vitamin C, Vitamin A, E,
                    B1, B2, B3, B5, B6, A, D3, Elemental Zinc, Choline, Biotin,
                    Coenzyme Q10, Vitamin A, E, E1, B2, B3, B5, B6, A, E, C, D3„
                    Vitamin K1, Biotin, Zinc, Selenium, Sodium...
                  </p>
                  <button className="download-btn">
                    Know More
                    <FontAwesomeIcon icon={faArrowDown} />
                  </button>
                </div>
              </div>
              <div className="two-card">
                <div className="gastro-card">
                  <div className="gastro-img">
                    <img src="Gastro-Intestinal-Supplements.jpg" alt="Gastro" />
                  </div>
                  <div className="gastro-text">
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
                <div className="liver-card">
                  <div className="liver-img">
                    <img src="Liver-supplements.jpg" alt="Liver" />
                  </div>
                  <div className="liver-text">
                    <h3>Liver Supplements</h3>
                    <p>
                      Flavonoid, Amino Acid, Multivi vonoid, Phospholipid,
                      Silymarin, L-Oml sparate, Vitamin, Calcium Pantothenate,
                      inamide, Selenium Dioxide, Dextrose, Sugar, Vit. C, Zinc,
                      Lactobacillus, Sod urn Chloride, Sodium Citrate, Pottasium
                      Chloride
                    </p>
                    <button className="download-btn">
                      Know More
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="zigzag">
                <div className="zigzag-img">
                  <img src="Skin-hair-Supplement.jpg" alt="Skin and Hair" />
                </div>
                <div className="zigzag-text">
                  <h3>Skin & hair Supplement</h3>
                  <p>
                    Extract Preparation, Pinebark Ext. (pycnogenol), Moringa
                    Oleifera, Saw Palmetto, Biotin, Msm, lnositol, Zinc,stinging
                    Nettle, Glutamic Acid.dl-methionine, Aspartic Acid,
                    L-lysine, Proline, Serine, Phenylalanine, Isoleucine,valine,
                    Glycine, Tyrosine, Alanine, Threonine,histidine, Cystine...
                  </p>
                  <button className="download-btn">
                    Know More
                    <FontAwesomeIcon icon={faArrowDown} />
                  </button>
                </div>
              </div>
              <div className="two-card">
                <div className="side-card">
                  <div className="side-card-img">
                    <img src="uti-supp.jpg" alt="UTI" />
                  </div>
                  <div className="side-card-text">
                    <h3>UTI Supplement</h3>
                    <p>
                      Cranberry & hibiscuss, D-Mannose, Propolis Ext. &
                      Pomegranate Ext...
                    </p>
                    <button className="download-btn">
                      Know More
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                  </div>
                </div>
                <div className="side-card">
                  <div className="side-card-img">
                    <img src="Appetizer.jpg" alt="Appetizer" />
                  </div>
                  <div className="side-card-text">
                    <h3>Appetizer</h3>
                    <p>Enzyme preparation</p>
                    <button className="download-btn">
                      Know More
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="zigzag-rev">
                <div className="zigzag-rev-img">
                  <img src="Protein-Supplement.jpg" alt="Protein" />
                </div>
                <div className="zigzag-rev-text">
                  <h3>Protein Supplement</h3>
                  <p>
                    Proteins, Omega-3 Fatty Acid, Methylcobalamine, Amino Acid
                    Blend, Weight Management Bleng (Conjugated Linoleic Acid
                    Powder, L-Carnitine, L-Tartrate, Green Tea Ext, Green Coffee
                    Ext, Natural Energy and Focus Blend (Caffeine, Theobromine))
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
    );
  }
}

export default Portfolio;
