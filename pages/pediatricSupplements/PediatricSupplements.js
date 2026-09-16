import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

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

const PediatricSupplements = () => <SupplementDetail categoryKey="pediatric" data={data} />;

export default PediatricSupplements;
