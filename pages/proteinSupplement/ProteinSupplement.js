import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import orthoImage from "../../assets/images/ortho.jpg";

const data = [
  {
    srNo: 1,
    classification: "Proteins, Omega-3 Fatty Acid, Methylcobalamin",
    ingredient:
      "DHA, Methylcobalamin, Vit. B1, B2, B5, B6, B12, A, D3, C, E, Folic Acid, Niacinamide, Zinc, Copper, Sodium, Iron, Manganese Sulphate",
    dosageForm: "Powder",
  },
  {
    srNo: 2,
    classification: "Vitamins, Proteins",
    ingredient:
      "L-Arginine, L-Citrulline, L-Carnitine, Spiruline, Pine Bark Ext, Wheat Germ Ext, ALA, Zinc, Astaxanthin, lodine, Vit. B2, B3, B6, B12, D3, L-Methyl Folate",
    dosageForm: "Powder",
  },
  {
    srNo: 3,
    classification: "Proteins, Vitamins, Minerals with Omega-3 Fatty Acid",
    ingredient:
      "DHA, L-Arginine, Vit. B1, B2, B3, B5, B6, B12, A, D, E, Folic Acid, Calcium, Phosphorus, Potassium, Sodium, Magnesium chloride, Iron, Zinc, Copper, lodine, Selenium",
    dosageForm: "Powder",
  },
  {
    srNo: 4,
    classification: "Proteins",
    ingredient:
      "Amino Acid Blend (L-Taurine, Beta Alanine, L-Leucine, L-Isoleucine, L-Valine, L-Glutamine, L-Citrulline, L-Arginine, L-Tyrosine, L-Histidine, L-Lysine, L-Phenylalanine, L-Threonine, L-Methionine), Weight Management Blend (Conjugated Linoleic Acid Powder, L-Carnitine, L-Tartrate, Green Tea Ext, Green Coffee Ext, Natural Energy and Focus Blend (Caffeine, Theobromine)",
    dosageForm: "Powder",
  },
  {
    srNo: 5,
    classification: "Proteins",
    ingredient: "100% Whey Protein",
    dosageForm: "Powder",
  },
  {
    srNo: 6,
    classification:
      "Proteins, Multivitamins, Multiminerals, Omega-3 Fatty Acid, Colostrum",
    ingredient:
      "Whey Protein, Calcium, Phosphorus, Potassium, Magnesium, Chloride, Sodium, DHA, Iron, Colostrum, Selenium, Biotin, Vitamin C, E, D, B1, B2, B3, B6, B12",
    dosageForm: "Powder",
  },
];

class ProteinSupplement extends Component {
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
                    className="sidebar-link"
                    onClick={() => Navigate(Routes.orthopedicsupplements)}
                  >
                    Orthopedic Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    Immunity Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    Gynec Infertility Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    Pediatric Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    Gastro Intestinal Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    Liver Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    Skin & hair Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    UTI Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    Appetizer Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                  <li className="sidebar-link">
                    Protein Supplements
                    <FontAwesomeIcon icon={faArrowRight} />
                  </li>
                </ul>
              </div>
              <div className="supplement-table">
                <table>
                  <thead>
                    <tr>
                      <th>Appetizer Supplements</th>
                    </tr>
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

export default ProteinSupplement;
