import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

const data = [
  {
    srNo: 1,
    classification: "Extract Preparation",
    ingredient: "Cranberry & Hibiscus",
    dosageForm: "Capsule",
  },
  {
    srNo: 2,
    classification: "Extract Preparation",
    ingredient: "D-Mannose, Propolis Ext. & Pomegranate Ext.",
    dosageForm: "Tablet",
  },
  {
    srNo: 3,
    classification: "Extract Preparation",
    ingredient: "Cranberry & D-Mannose",
    dosageForm: "Tablet",
  },
  {
    srNo: 4,
    classification: "Extract Preparation",
    ingredient: "Cranberry Ext., D-Mannose Ext., Hibiscus Ext.",
    dosageForm: "Tablet",
  },
];

class UtiSupplements extends Component {
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
              <h1>UTI Supplements</h1>
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

export default UtiSupplements;
