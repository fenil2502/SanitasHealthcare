import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";

const data = [
  {
    srNo: 1,
    classification: "Multivitamins, Multiminerals, Amino Acids",
    ingredient:
      "L-Carnitine, L-Arginine, Vitamin C, Iron, Magnesium, Niacinamide, Zinc, L-Glutamic Acid, Vitamin E, Lycopene, L-Glycine, L-Taurine, Vit. B1, Vit. B2, Vit. B6, Beta Carotene, Copper, Folic Acid, Biotin, Iodine, Vitamin K, Vit. D3, Lutein",
    dosageForm: "Tablet",
  },
  {
    srNo: 2,
    classification: "Multivitamins, Multiminerals, Amino Acids",
    ingredient:
      "L-Lysine Hcl., Vit. C, Vit. B3, L-Carnitine, Glutamic Acid, Vit. E, Lycopene, Magnesium, Vit. B5, Vit. B1, Vit. B2, Vit. B6, Vit. A, Iodine, Copper, Vit. D3, Vit. B12",
    dosageForm: "Tablet",
  },
  {
    srNo: 3,
    classification: "Multivitamins, Multiminerals, Extracts",
    ingredient:
      "Ginseng Ext. Powder, Vit. C, Vit. B3, Vit. B5, Vit. E, Vit. B2, Vit. B1, Vit. B6, Vit. A, Folic Acid, Vit. D3, Vit. B12, Calcium, Phosphorus, Iron, Zinc, Potassium, Manganese, Copper, Iodine",
    dosageForm: "Capsule",
  },
  {
    srNo: 4,
    classification: "Multivitamins, Multiminerals, Amino Acids",
    ingredient:
      "L-Lysine Hcl., Vit. C, Glutamic Acid, Vit. E, Magnesium, Vit. B5, Vit. B1, Vit. B6, Vit. A, Iodine, Copper, Vit. D3, Vit. B12",
    dosageForm: "Capsule",
  },
  {
    srNo: 5,
    classification: "Multivitamins, Multiminerals, Amino Acids",
    ingredient:
      "L-Lysine Hcl, Vit. C, Vit. B3, L-Carnitine, Zinc, Glutamic Acid, Vit. E, Magnesium, Vit. B5, Vit. B1, Vit. B2, Vit. B6, Vit. A, Iodine, Copper, Selenium, Vit. D3, Vit. B2",
    dosageForm: "Syrup",
  },
  {
    srNo: 6,
    classification: "Multivitamins, Multiminerals, Extracts",
    ingredient:
      "Lycopene, Green Tea Ext., Vit. C, Grape Seed Ext., Niacinamide, Cal. Pantothenate, Zinc, Sod. Selenate, Vit. B1, Vit. B6, Vit. B2, Folic Acid, Methylcobalamin, Biotin, Vit. A, Vit. E",
    dosageForm: "Capsule",
  },
  {
    srNo: 7,
    classification: "Multivitamins, Multiminerals, Extracts",
    ingredient:
      "Omega 3 Fatty Acid, Ginseng Ext., Colostrum, Ginko Biloba, Grape Seed Ext., Green Tea Ext., Co-Enzyme Q10, Betacarotene, Citrus Bioflavonoid, Fructo Oligosaccharides, Wheat Germ Oil, Lutein, Zeaxanthin, Lactobacillus, Vit. C, Niacinamide, Vit. E, Vit. B5, Vit. B2, Vit. B3, Folic Acid, Vit. A, Vit. B12, Vit. D3, Calcium, Phosphorus, Zinc, Magnesium, Iron, Manganese, Chromium, Iodine, Selenium, Sodium Molybdate",
    dosageForm: "Tablet",
  },
  {
    srNo: 8,
    classification: "Multivitamins, Multiminerals, Amino Acids, Extracts",
    ingredient:
      "Betacarotene, Astaxanthin, Citrus Bioflavonoid, Pycnogenol, Lutein, Zeaxanthine, Bilberry Ext., Biotin, Glutamic Acid, DI Methionine, Aspartic Acid, Leucine, Arginine, L-lysine, Proline, Serine, Phenylalanine, Isoluecine, Valine, Glycine, Tyrosine, Copper, Alanine, Threonine, Histidine, Cystine, Tryptophan, Green Tea Ext., Grape Seed Ext., Curcumin, Pomegranate, Vit. C, Vit. E, Zinc, Magnesium, Manganese, Vit. B1, Vit. B2, Vit. B12, Niacinamide",
    dosageForm: "Capsule",
  },
  {
    srNo: 9,
    classification: "Multivitamins",
    ingredient: "Methylcobalamin, ALA, Vit. B1, Vit. B6, Folic Acid",
    dosageForm: "Capsule",
  },
  {
    srNo: 10,
    classification: "Multivitamins with Extract",
    ingredient:
      "Methylcobalamine, Folic Acid, Ginkgo Biloba, ALA, Vit. B1, Vit. B6",
    dosageForm: "Capsule",
  },
  {
    srNo: 11,
    classification: "Multivitamins with Omega 3 Fatty Acid",
    ingredient:
      "Decosahexaenoic Acid, Folic Acid, Methylcobalamin, Pyridoxine Hcl.",
    dosageForm: "Capsule",
  },
  {
    srNo: 12,
    classification: "Multiminerals, Monosaccharide, Vitamin",
    ingredient:
      "Glucosamine, Methyl sulphonyl Methane, Vit. C, Copper, Silicon, Boron, Selenium, Chromium Picolinate, Zinc, Magnesium",
    dosageForm: "Tablet",
  },
  {
    srNo: 13,
    classification: "Multiminerals, Gags, Vitamins",
    ingredient:
      "Glucosamine, Chondroitin, Methyl Sulphonyl Methane, Vit. C, Copper, Silicon Boron, Selenium",
    dosageForm: "Tablet",
  },
  {
    srNo: 14,
    classification: "Carbohydrate with Omega 3 Fatty Acid",
    ingredient: "Colostrum, DHA, Pycnogenol",
    dosageForm: "Powder",
  },
  {
    srNo: 15,
    classification: "Extract",
    ingredient: "Pomegranate Extract",
    dosageForm: "Capsule",
  },
];

class ImmunitySupplements extends Component {
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
              <h1>Immunity Supplements</h1>
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
                    className="sidebar-link active-page"
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

export default ImmunitySupplements;
