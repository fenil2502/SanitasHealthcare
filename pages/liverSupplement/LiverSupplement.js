import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import orthoImage from "../../assets/images/ortho.jpg";
import { Navigate, Routes } from "../../navigation/NavigationLib";

const data = [
  {
    srNo: 1,
    classification: "Flavonoid, Amino Acid, Multivitamins",
    ingredient:
      "Silymarin, L-Ornithine L-Aspartate, Vit. B1, Vit. B2, Vit. B6, Calcium Pantothenate, Niacinamide, Vit. B12, Selenium Dioxide",
    dosageForm: "Capsule",
  },
  {
    srNo: 2,
    classification: "Flavonoid, Multivitamins",
    ingredient:
      "Silymarin, Vit. B1, Vit. B2, Vit. B6, Niacinamide, Vit. B12, D-Panthenol",
    dosageForm: "Suspension",
  },
  {
    srNo: 3,
    classification: "Carbohydrate, Vitamins, Minerals",
    ingredient:
      "Dextrose, Sugar, Vit. C, Zinc, Lactobacillus, Sodium Chloride, Sodium Citrate, Potassium Chloride",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 4,
    classification: "Flavonoid, Phospholipid",
    ingredient: "Silymarin, Cynara Scolymus (Artichoke)",
    dosageForm: "Capsule",
  },
  {
    srNo: 5,
    classification: "Flavonoid, Phospholipid",
    ingredient: "S-Adenosyl Methionine, Silymarin, Cynara Scolymus (Artichoke)",
    dosageForm: "Capsule",
  },
  {
    srNo: 6,
    classification: "Flavonoid",
    ingredient: "Flavoxate",
    dosageForm: "Tablet",
  },
  {
    srNo: 7,
    classification: "Extract Preparation",
    ingredient:
      "Milk Thistle, Dandelion, Artichoke, Turmeric, Ginger, Black Pepper Ext",
    dosageForm: "Tablet",
  },
  {
    srNo: 8,
    classification: "Flavonoid, Amino Acid, Multi Vitamins",
    ingredient:
      "Silymarin, L-Ornithine L-Aspartate, Vit. B1, N-Acetylcysteine, Vit. B2, Vit. B6, Vit. B12, Calcium Pantothenate & Niacinamide",
    dosageForm: "Tablet",
  },
];

class LiverSupplement extends Component {
  render() {
    return (
      <div className="supplementpage">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${orthoImage})`,
            height: `100vh`,
          }}
        >
          <div className="container">
            <div className="banner-inner">
              <h1>Liver Supplements</h1>
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
                      <th>Sr No.</th>
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

export default LiverSupplement;