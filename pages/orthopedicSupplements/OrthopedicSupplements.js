import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

const data = [
  {
    srNo: 1,
    classification: "Calcium Supplement with Vitamins",
    ingredient: "Calcium Citrate, Magnesium, Zinc Folic Acid, Vitamin D",
    dosageForm: "Tablet",
  },
  {
    srNo: 2,
    classification: "Calcium Supplement with Vitamins",
    ingredient: "Calcium Citrate, Magnesium, Zinc, Vitamin D3, Methylcobalamin",
    dosageForm: "Tablet",
  },
  {
    srNo: 3,
    classification: "Calcium Supplement with Vit D3",
    ingredient: "Calcium Carbonate with Vitamin D3",
    dosageForm: "Tablet",
  },
  {
    srNo: 4,
    classification: "Calcium Supplement with Vit. & Minerals",
    ingredient: "Calcium Carbonate, Magnesium, Vitamin D3, Zinc Sulphate",
    dosageForm: "Tablet",
  },
  {
    srNo: 5,
    classification: "Calcium Supplement with Vit. & Minerals",
    ingredient:
      "Calcium Carbonate, Magnesium, Zinc, Methylcobalamin, Vitamin K27 with Calcitrol",
    dosageForm: "Tablet",
  },
  {
    srNo: 6,
    classification: "Calcium Supplement with Vit D3",
    ingredient: "Calcium Carbonate With Calcitrol.",
    dosageForm: "Tablet",
  },
  {
    srNo: 7,
    classification: "Calcium Supplement with Vit D3",
    ingredient: "Calcium Gluconate With Calcitrol",
    dosageForm: "Syrup",
  },
  {
    srNo: 8,
    classification: "Calcium Supplement with Vit. & Minerals",
    ingredient: "Calcium Gluconate, Magnesium, Zinc, Vitamin D3",
    dosageForm: "Syrup",
  },
  {
    srNo: 9,
    classification: "Vitamin D",
    ingredient: "Vitamin D3",
    dosageForm: "Chewable Tablet",
  },
  {
    srNo: 10,
    classification: "Carbs with Diacerein",
    ingredient: "Glucosamine with Diacerein",
    dosageForm: "Tablet",
  },
  {
    srNo: 11,
    classification: "Carbs with Extracts",
    ingredient: "Glucosamine, Boswellia Serrata Extract, Rosehip Extract",
    dosageForm: "Tablet",
  },
  {
    srNo: 12,
    classification: "Carbs",
    ingredient: "Glucosamine with Hyaluronic Acid",
    dosageForm: "Capsule",
  },
  {
    srNo: 13,
    classification: "Extract",
    ingredient: "Cissus Quadrangularis",
    dosageForm: "Capsule",
  },
  {
    srNo: 14,
    classification: "Extract",
    ingredient: "Rosehip Extract",
    dosageForm: "Capsule",
  },
  {
    srNo: 15,
    classification: "Peptide, Vitamins & Carbs",
    ingredient: "Collagen Peptide, Glucosamine Sulphate, Vitamin C",
    dosageForm: "Sachet",
  },
  {
    srNo: 16,
    classification: "Amino Acids",
    ingredient: "S-Adenosyl, L-Methionine",
    dosageForm: "Tablet",
  },
  {
    srNo: 17,
    classification: "Calcium Supplement with Vit. D3 & Minerals",
    ingredient: "Calcium Carbonate, Magnesium, Vitamin D3, Zinc Sulphate",
    dosageForm: "Suspension",
  },
  {
    srNo: 18,
    classification: "Calcium Supplement with Vit D3",
    ingredient: "Calcium Carbonate with Vit D3",
    dosageForm: "Suspension",
  },
  {
    srNo: 19,
    classification: "Extracts, Amino Acids with Vitamin",
    ingredient:
      "Rosehip, Collagen Peptide, Sodium Hyaluronate, Vitamin C, L-Arginine with Chondroitin",
    dosageForm: "Tablet",
  },
  {
    srNo: 20,
    classification: "Vitamin D",
    ingredient: "Cholecalciferol (60,000 IU)",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 21,
    classification: "Calcium Supplement with Vit D",
    ingredient:
      "Calcium Aspartate, Calcium Citrate, Calcium orotate with Vit. D3",
    dosageForm: "Tablet",
  },
  {
    srNo: 22,
    classification: "Calcium Supplement with Vit. & Minerals",
    ingredient:
      "Calcium Aspartate, Calcium Orotate, Zinc, Magnesium, Cynocobalamin with Calcitrol",
    dosageForm: "Tablet",
  },
  {
    srNo: 23,
    classification: "Calcium Supplement with Vit D",
    ingredient: "Calcium Citrate with Vitamin D3",
    dosageForm: "Chewable Tablet",
  },
  {
    srNo: 24,
    classification: "Calcium, Extract with Vitamin",
    ingredient:
      "Cal. Ascorbate, Bosewellia Ext., Curcumin, Longa, Collagen Type II, Ginger Ext., Red Chilli Ext., Black Pepper Ext., Vit. E, Sod. Hyaluronate",
    dosageForm: "Tablet",
  },
  {
    srNo: 25,
    classification: "Calcium Supplement with Vit. & Minerals",
    ingredient: "Natural Milk Calcium, Phosphorus, Potassium with Vit. D3",
    dosageForm: "Tablet",
  },
  {
    srNo: 26,
    classification: "Extracts with Peptide",
    ingredient:
      "Rosehip Ext., Devis Claw Ext., Turmeric Ext., Boswellia Serrata, Collagen Type II with Sodium Hyaluronate",
    dosageForm: "Tablet",
  },
  {
    srNo: 27,
    classification: "Extract, Monosaccharide, Amino Acid, Vitamin",
    ingredient:
      "Undenatured Collagen Type II, Hyaluronic acid, Bamboo Ext., Glucosamine, L-lysine with Vit. C",
    dosageForm: "Tablet",
  },
];

class OrthopedicSupplements extends Component {
  render() {
    return (
      <div className="supplementpage">
        <div
          className="banner"
          style={{
            backgroundImage: `url(./meds.jpg)`,
            backgroundSize : `100%`,
            backgroundRepeat: `no-repeat`,
            objectFit: `cover`,
            alignContent: `center`,
          }}
        >
          <div className="container">
            <div className="banner-inner">
              <h1>Orthopedic Supplements</h1>
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
                    className="sidebar-link active-page"
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

export default OrthopedicSupplements;
