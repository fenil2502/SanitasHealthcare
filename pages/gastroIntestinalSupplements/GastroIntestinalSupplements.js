import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

const data = [
  {
    srNo: 1,
    classification: "Mammal Milk",
    ingredient: "Colostrum",
    dosageForm: "Sachet",
  },
  {
    srNo: 2,
    classification: "Mammal Milk",
    ingredient: "Colostrum",
    dosageForm: "Chewable Tablet",
  },
  {
    srNo: 3,
    classification: "Mammal Milk",
    ingredient: "Colostrum",
    dosageForm: "Capsule Powder (Sachet)",
  },
  {
    srNo: 4,
    classification: "Enzymes (Pre & Pro Biotics)",
    ingredient:
      "Saccharomyces Boulardii, Fructo Oligosaccharides, Clostridium Butyricum, Lactobacillus Rhamnosus, Bifidobacterium Bifidum, Bifidobacterium Longum, Streptococcus Thermophilus & Lactobacillus Acidophilus",
    dosageForm: "Capsule Powder (Sachet)",
  },
  {
    srNo: 5,
    classification: "Enzymes",
    ingredient: "Alpha Amylase, Papain, Pepsin Fungal Diastase",
    dosageForm: "Capsule",
  },
  {
    srNo: 6,
    classification: "Multivitamin, Amino Acid, Mineral",
    ingredient: "L-Glutamine, Vit. A, Vit. C, Selenium",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 7,
    classification: "Enzyme Preparation",
    ingredient: "Saccharomyces Boulardii, Lactic Acid Bacillus with Zinc",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 8,
    classification: "Enzyme with Multivitamins",
    ingredient: "Papain, Fungal Diastase, Niacinamide, Vit. B1 & Vit. B6",
    dosageForm: "Syrup (100 ml)",
  },
  {
    srNo: 9,
    classification: "Enzyme Preparation",
    ingredient:
      "Saccharomyces Boulardii, Racecadotril, Zinc, Lactic Acid Bacillus",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 10,
    classification: "Enzyme Preparation",
    ingredient:
      "Papain, Fungal Diastase, Niacinamide, Vit. B1, Vit. B6, Vit. B12, Vit. B2, D-Panthenol",
    dosageForm: "Syrup (100 ml)",
  },
];

class GastroIntestinalSupplements extends Component {
  render() {
    return (
      <div className="supplementpage">
        <div
          className="banner"
          style={{
            backgroundImage: `url(./meds.jpg)`,
            backgroundSize: `100%`,
            backgroundRepeat: `no-repeat`,
            objectFit: `cover`,
            alignContent: `center`,
          }}
        >
          <div className="container">
            <div className="banner-inner">
              <h1>Gastro Intestinal Supplements</h1>
            </div>
          </div>
        </div>
        <div className="supplement-details">
          <div className="container">
            <div className="supplement-details-inner">
              <div className="supplement-sidebar">
                <h2>Supplements</h2>
                <ul>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.orthopedicsupplements)}
                  >
                    Orthopedic Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.immunitysupplements)}
                  >
                    Immunity Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.gynecinfertilitysupplements)}
                  >
                    Gynec & Infertility Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.pediatricsupplements)}
                  >
                    Pediatric Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link active-page"
                    onClick={() => Navigate(Routes.gastrointestinalsupplements)}
                  >
                    Gastro Intestinal Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.liversupplement)}
                  >
                    Liver Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.skinhairsupplements)}
                  >
                    Skin & hair Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.utisupplements)}
                  >
                    UTI Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.appetizersupplements)}
                  >
                    Appetizer Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.proteinsupplement)}
                  >
                    Protein Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.weightloss)}
                  >
                    Weight Loss Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                </ul>
              </div>
              <div className="supplement-table">
                <table>
                  <thead>
                    <tr>
                      <th>Active Classification</th>
                      <th>Active Ingredient</th>
                      <th>Dosage Form</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.srNo}</td>
                        <td>{item.classification}</td>
                        <td>{item.ingredient}</td>
                        <td>{item.dosageForm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GastroIntestinalSupplements;
