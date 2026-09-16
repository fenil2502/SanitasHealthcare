import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

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

const SkinHairSupplements = () => <SupplementDetail categoryKey="skinhair" data={data} />;

export default SkinHairSupplements;
