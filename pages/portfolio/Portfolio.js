import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
              <div className="zig-zag">
                <div className="container">
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
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag-rev">
                <div className="container">
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
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag">
                <div className="container">
                  <div className="zig-zag-inner">
                    <div className="zig-zag-img">
                      <img src="Gynec-Infertility-Supply.jpg" alt="Gynec Infertility" />
                    </div>
                    <div className="zig-zag-text">
                      <h3>Gynec Infertility Supplements</h3>
                      <p>
                        Multivitamins, Mineral with Omega 3 Fatty Acid, Iron
                        Supplement- L-Methyl Folate, Methylcobalamine,
                        Pyridoxine with Phosphate, Ferrous Bisglycinate,
                        Mangenese, Vit. B2, Copper, Folic Acid, Vit. B12,
                        Ferrous Ascorbate, Folic Acid, Zinc Sulphate.
                      </p>
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag-rev">
                <div className="container">
                  <div className="zig-zag-rev-inner">
                    <div className="zig-zag-rev-img">
                      <img src="Pediatric-Supplement.jpg" alt="Pediatric" />
                    </div>
                    <div className="zig-zag-rev-text">
                      <h3>Pediatric Supplement</h3>
                      <p>
                        Enzyme Preparation, Omega-3 Fatty Acid, Amylase,
                        Protease, Lactase, lipase, DHA, L-Lysine HCL, Vitamin C,
                        Vitamin A, E, B1, B2, B3, B5, B6, A, D3, Elemental Zinc,
                        Choline, Biotin, Coenzyme Q10, Vitamin A, E, B1, B2, B3,
                        B5, B6, A, E, C, D3, Vitamin K1, Biotin, Zinc, Selenium,
                        Sodium...
                      </p>
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag">
                <div className="container">
                  <div className="zig-zag-inner">
                    <div className="zig-zag-img">
                      <img src="Gastro-Intestinal-Supplements.jpg" alt="Gastro Intestinal" />
                    </div>
                    <div className="zig-zag-text">
                      <h3>Gastro Intestinal Supplements</h3>
                      <p>
                        Mammal Milk, Enzymes (Pre & Pro Biotics), Multivitamin,
                        Amino Acid, Mineral Saccaromyces Boulardi, Fructo
                        Oligosaccharides, Clostridum, Butyricum, Lactobacillus
                        Rhamnosus, Bifidobacterium Bifidum, Bifidobacterium
                        Longum, Streptococcus Thermophilus & Lactobacillus
                        Acidophilus...
                      </p>
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag-rev">
                <div className="container">
                  <div className="zig-zag-rev-inner">
                    <div className="zig-zag-rev-img">
                      <img src="Liver-supplements.jpg" alt="Liver" />
                    </div>
                    <div className="zig-zag-rev-text">
                      <h3>Liver Supplements</h3>
                      <p>
                        Flavonoid, Amino Acid, Multivitamins, Phospholipid,
                        Silymarin, L-Ornithine L-Asparate, Vitamin, Calcium
                        Pantothenate, Niacinamide, Selenium Dioxide, Dextrose,
                        Sugar, Vit. C, Zinc, Lactobacillus, Sodium Chloride,
                        Sodium Citrate, Potassium Chloride
                      </p>
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag">
                <div className="container">
                  <div className="zig-zag-inner">
                    <div className="zig-zag-img">
                      <img src="Skin-hair-Supplement.jpg" alt="Skin and Hair" />
                    </div>
                    <div className="zig-zag-text">
                      <h3>Skin & hair Supplement</h3>
                      <p>
                        Extract Preparation, Pinebark Ext. (pycnogenol), Moringa
                        Oleifera, Saw Palmetto, Biotin, Msm, lnositol, Zinc,
                        stinging Nettle, Glutamic Acid.dl-methionine, Aspartic
                        Acid, L-lysine, Proline, Serine, Phenylalanine,
                        Isoleucine,valine, Glycine, Tyrosine, Alanine,
                        Threonine,histidine, Cystine...
                      </p>
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag-rev">
                <div className="container">
                  <div className="zig-zag-rev-inner">
                    <div className="zig-zag-rev-img">
                      <img src="uti-supp.jpg" alt="UTI" />
                    </div>
                    <div className="zig-zag-rev-text">
                      <h3>UTI Supplement</h3>
                      <p>
                        Cranberry & Hibiscuss, D-Mannose, Propolis Ext. &
                        Pomegranate Ext...
                      </p>
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag">
                <div className="container">
                  <div className="zig-zag-inner">
                    <div className="zig-zag-img">
                      <img src="Appetizer.jpg" alt="Appetizer" />
                    </div>
                    <div className="zig-zag-text">
                      <h3>Appetizer</h3>
                      <p>Enzyme preparation</p>
                      <button>Know more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zig-zag-rev">
                <div className="container">
                  <div className="zig-zag-rev-inner">
                    <div className="zig-zag-rev-img">
                      <img src="Protein-Supplement.jpg" alt="Protein" />
                    </div>
                    <div className="zig-zag-rev-text">
                      <h3>Protein Supplement</h3>
                      <p>
                        Proteins, Omega-3 Fatty Acid, Methylcobalamine, Amino
                        Acid Blend, Weight Management Blend (Conjugated Linoleic
                        Acid Powder, L-Carnitine, L-Tartrate, Green Tea Ext,
                        Green Coffee Ext, Natural Energy and Focus Blend
                        (Caffeine, Theobromine)
                      </p>
                      <button>Know more</button>
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

export default Portfolio;
