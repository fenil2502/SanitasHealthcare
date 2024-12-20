import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

const data = [
  {
    srNo: 1,
    classification: "Extract Preparation",
    ingredient: "Pine bark Ext. (pycnogenol)",
    dosageForm: "Capsule",
  },
  {
    srNo: 2,
    classification: "Extract Preparation",
    ingredient: "Moringa Oleifera",
    dosageForm: "Capsule",
  },
  {
    srNo: 3,
    classification: "Amino Acid Preparation",
    ingredient:
      "Saw Palmetto, Biotin, Msm, Inositol, Zinc, Stinging Nettle, Glutamic Acid, DL-Methionine, Aspartic Acid, L-lysine, Proline, Serine, Phenylalanine, Isoleucine, Valine, Glycine, Tyrosine, Alanine, Threonine, Histidine, Cystine, Tryptophan",
    dosageForm: "Tablet",
  },
  {
    srNo: 4,
    classification: "Extract Preparation",
    ingredient: "Saw Palmetto, Biotin, Inositol",
    dosageForm: "Capsule",
  },
  {
    srNo: 5,
    classification: "Peptide",
    ingredient: "Glutathione",
    dosageForm: "Capsule",
  },
  {
    srNo: 6,
    classification: "Extracts, Multivitamins, Multiminerals",
    ingredient:
      "Grape Seed Ext, Green Tea Ext, Calcium Pantothenate, Niacinamide, Vit. C, Biotin, Folic Acid, Vit. B6, Choline Bitartrate, Inositol, L-methionine, L-cysteine, L-lysine, Zinc, Iron, Copper, Silica, Sodium Selenate",
    dosageForm: "Tablet",
  },
  {
    srNo: 7,
    classification: "Multivitamins, Multiminerals",
    ingredient: "Biotin, Calcium D Pantothenate, Zinc, Selenium",
    dosageForm: "Tablet",
  },
];

class SkinHairSupplements extends Component {
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
              <h1>Skin & Hair Supplements</h1>
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
                    className="sidebar-link active-page"
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

export default SkinHairSupplements;
