import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

const data = [
  {
    srNo: 1,
    classification: "Enzyme Preparation",
    ingredient: "Amylase, protease, lactase, lipase",
    dosageForm: "Drops",
  },
  {
    srNo: 2,
    classification: "Omega-3 Fatty Acid",
    ingredient: "DHA",
    dosageForm: "Drops",
  },
  {
    srNo: 3,
    classification: "Multivitamins, Multiminerals",
    ingredient:
      "L-Lysine Hcl, Vitamin C, Vitamin A, E, B1, B2, B3, B5, B6, A, D3, Elemental Zinc, Choline, Biotin",
    dosageForm: "Drops",
  },
  {
    srNo: 4,
    classification: "Multivitamins, Multiminerals with Coenzyme",
    ingredient:
      "Coenzyme Q10, vitamin A, E, B1, B2, B3, B5, B6, A, E, C, D3, Vitamin K1, Biotin, Zinc, Selenium, Sodium",
    dosageForm: "Drops",
  },
  {
    srNo: 5,
    classification: "Iron Supplement",
    ingredient: "Ferrous Calcium Citrate Complex (Microfied), Folic Acid",
    dosageForm: "Drops",
  },
  {
    srNo: 6,
    classification: "Iron Supplement",
    ingredient: "Ferrous Asparto Glycinate, Folic Acid",
    dosageForm: "Drops",
  },
  {
    srNo: 7,
    classification: "Iron Supplement",
    ingredient: "Ferrous Ascorbate, Methylcobalamin, Folic Acid, Zinc",
    dosageForm: "Drops",
  },
  {
    srNo: 8,
    classification: "Amino Acids",
    ingredient: "L-Carnosine",
    dosageForm: "Syrup",
  },
  {
    srNo: 9,
    classification: "Omega-3 Fatty Acid",
    ingredient: "Omega-3, EPA & DHA",
    dosageForm: "Syrup",
  },
  {
    srNo: 10,
    classification: "Multivitamins, Multiminerals",
    ingredient:
      "L-Lysine Hcl, Vitamin C, Nicotinamide, Vitamin E, D-Panthenol, Vitamin B1, B2, B12, B6, A, D3, Elemental Iron, Elemental Zinc",
    dosageForm: "Syrup",
  },
  {
    srNo: 11,
    classification: "Multivitamins, Multiminerals",
    ingredient:
      "Vitamin C, D-Panthenol, Vitamin B1, B2, B3, B5, B12, B6, A, D3, E, Folic Acid, Copper Sulphate, Iodine, Selenium",
    dosageForm: "Syrup",
  },
  {
    srNo: 12,
    classification: "Pre & Pro Biotic",
    ingredient:
      "Saccharomyces Boulardii (Lyophilized), Lactic Acid Bacillus, Racecadotril",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 13,
    classification: "Pre & Pro Biotic",
    ingredient:
      "Saccharomyces Boulardii (Lyophilized), Lactic Acid Bacillus, Zinc",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 14,
    classification:
      "Proteins, Multivitamins, Multiminerals (Infant Formula Upto 6 months)",
    ingredient:
      "Protein, Calcium, Phosphorus, Magnesium, Zinc, Sodium, Potassium, Manganese, Iron, Iodine, Vitamin A, C, D, E, K, B1, B2, B3, B5, B6, B12, Biotin, Choline, Taurine, L-Carnitine",
    dosageForm: "Powder",
  },
  {
    srNo: 15,
    classification:
      "Proteins, Multivitamins, Multiminerals (Infant Formula After 6 months to 24 months)",
    ingredient:
      "Proteins, Multivitamins, Multiminerals (Infant Formula After 6 months to 24 months)",
    dosageForm: "Powder",
  },
];

class PediatricSupplement extends Component {
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
              <h1>Pediatric Supplements</h1>
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
                    Gynec Infertility Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link active-page"
                    onClick={() => Navigate(Routes.pediatricsupplements)}
                  >
                    Pediatric Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li
                    className="sidebar-link"
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

export default PediatricSupplement;
