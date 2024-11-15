import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import orthoImage from "../../assets/images/ortho.jpg";

const data = [
  {
    srNo: 1,
    classification: "Enzyme Preparation",
    ingredient: "Fungal Diastase With Pepsin",
    dosageForm: "Syrup",
  },
  {
    srNo: 2,
    classification: "Enzyme Preparation",
    ingredient: "Fungal Diastase With Pepsin",
    dosageForm: "Drop",
  },
];

const info = [
  {
    srNo: 1,
    classification: "Extract Preparation",
    ingredient: "Green Tea Extract",
    dosageForm: "Capsule",
  },
  {
    srNo: 2,
    classification: "Extract Preparation",
    ingredient: "Grape Seed Extract (Proanthocyanidin)",
    dosageForm: "Capsule",
  },
  {
    srNo: 3,
    classification: "Extract Preparation",
    ingredient:
      "Garcinia Cambogia, Green Tea Ext., Acaiberry, Chromium, Grape Seed Ext., L-Carnitine & Guarana",
    dosageForm: "Capsule",
  },
  {
    srNo: 4,
    classification: "Extract Preparation",
    ingredient: "Garcinia Cambogia, Calcium & Potassium",
    dosageForm: "Capsule",
  },
  {
    srNo: 5,
    classification: "Extract Preparation",
    ingredient: "Opuntia Cactus",
    dosageForm: "Capsule",
  },
];

class AppetizerSupplements extends Component {
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

                <table>
                  <thead>
                    <tr>
                      <th>Weight Loss Supplements</th>
                    </tr>
                    <tr>
                      <th>Sr No.</th>
                      <th>Active Classification</th>
                      <th>Active Ingredient</th>
                      <th>Dosage Form</th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.map((item, index) => (
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

export default AppetizerSupplements;
