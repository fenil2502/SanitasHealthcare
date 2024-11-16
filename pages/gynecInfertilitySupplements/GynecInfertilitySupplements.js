import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

const data = [
  {
    srNo: 1,
    classification: "Multivitamins with Minerals",
    ingredient: "L-Methylfolate, Methylcobalamin, Pyridoxine with Phosphate",
    dosageForm: "Tablet",
  },
  {
    srNo: 2,
    classification: "Multivitamins, Minerals with Omega 3 Fatty Acid",
    ingredient:
      "L-Methylfolate, Methylcobalamine, Pyridoxine, Phosphate with DHA",
    dosageForm: "Tablet",
  },
  {
    srNo: 3,
    classification: "Iron Supplement with Multivitamins",
    ingredient:
      "Ferrous Bisglycinate, Manganese, Vit. B2, Copper, Folic Acid, Vit. B12",
    dosageForm: "Tablet",
  },
  {
    srNo: 4,
    classification: "Iron Supplement",
    ingredient: "Ferrous Ascorbate, Folic Acid, Zinc Sulphate",
    dosageForm: "Tablet",
  },
  {
    srNo: 5,
    classification: "Iron Supplement",
    ingredient:
      "Ferrous Ascorbate, Folic Acid, Zinc Sulphate, Methylcobalamin with DHA",
    dosageForm: "Tablet",
  },
  {
    srNo: 6,
    classification: "Iron Supplement",
    ingredient: "Ferrous Ascorbate, Folic Acid",
    dosageForm: "Suspension",
  },
  {
    srNo: 7,
    classification: "Iron Supplement",
    ingredient: "Sodium Feredetate, Folic Acid, Vit. B12",
    dosageForm: "Tablet",
  },
  {
    srNo: 8,
    classification: "Iron Supplement with Multivitamins",
    ingredient: "Carbonyl Iron, Folic Acid, Vit. C, Vit. B12 & Zinc Sulphate",
    dosageForm: "Capsule",
  },
  {
    srNo: 9,
    classification: "Amino Acid with Carbohydrates",
    ingredient:
      "L-Arginine, Proanthocyanidin, Myoinositol, BCAA's (L-Leucine, Iso-Leucine, Valine)",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 10,
    classification: "Carbs with Vitamin",
    ingredient: "Myo-Inositol, Vit. D3 with L-Methylfolate",
    dosageForm: "Tablet",
  },
  {
    srNo: 11,
    classification: "Iron Supplement with Multivitamins",
    ingredient:
      "Ferrous Ascorbate, Folic Acid, Vit. B12, Vit. B6 & Zinc Sulphate",
    dosageForm: "Capsule",
  },
  {
    srNo: 12,
    classification: "Iron Supplement",
    ingredient: "Iron (III) Hydroxide Polymaltose, Folic Acid",
    dosageForm: "Syrup (150 ml)",
  },
  {
    srNo: 13,
    classification: "Iron Supplement with Multivitamins",
    ingredient:
      "Ferrous Fumarate, Folic Acid, Vit. B12, Vit. C, Vit. B6 & Zinc Sulphate",
    dosageForm: "Capsule",
  },
  {
    srNo: 14,
    classification: "Carbohydrate with NAC",
    ingredient: "Myo-Inositol with N-Acetylcysteine",
    dosageForm: "Tablet",
  },
  {
    srNo: 15,
    classification: "Coenzyme, Multi Vitamins, Amino Acid",
    ingredient:
      "Co Q-10 (Ubidecarenone), Astaxanthin, Zinc, Folic Acid, Methylcobalamin, Pyridoxine, Lycopene, Selenium, Levocarnitine Tartarate, L-Arginine",
    dosageForm: "Tablet",
  },
  {
    srNo: 16,
    classification: "Iron Supplement with Multivitamins, Amino Acid",
    ingredient:
      "Ferrous Gluconate, Zinc, Pyridoxine, Vit. B12, Folic Acid, Astaxanthin, L-Arginine, Lycopene with Selenium",
    dosageForm: "Tablet",
  },
  {
    srNo: 17,
    classification: "Enzymes (Pre and Probiotics)",
    ingredient:
      "Lactobacillus Acidophilus, Lactobacillus Rhamnosus, Lactobacillus Reuteri, Lactobacillus Plantarum, Lactobacillus Casei, Lactobacillus Fermentum, Lactobacillus Bifidum with Fructo Oligosaccharide",
    dosageForm: "Tablet",
  },
];

class GynecInfertilitySupplements extends Component {
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
              <h1>Gynec Infertility Supplements</h1>
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
                    className="sidebar-link active-page"
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

export default GynecInfertilitySupplements;
