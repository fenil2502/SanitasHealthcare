import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

const data = [
  {
    srNo: 1,
    classification: "Mammal Milk",
    ingredient: "Colostrum",
    dosageForm: "Sachet",
  },
  {
    srNo: 2,
    classification: "Mammal Milk",
    ingredient: "Colostrum",
    dosageForm: "Chewable Tablet",
  },
  {
    srNo: 3,
    classification: "Mammal Milk",
    ingredient: "Colostrum",
    dosageForm: "Capsule Powder (Sachet)",
  },
  {
    srNo: 4,
    classification: "Enzymes (Pre & Pro Biotics)",
    ingredient:
      "Saccharomyces Boulardii, Fructo Oligosaccharides, Clostridium Butyricum, Lactobacillus Rhamnosus, Bifidobacterium Bifidum, Bifidobacterium Longum, Streptococcus Thermophilus & Lactobacillus Acidophilus",
    dosageForm: "Capsule Powder (Sachet)",
  },
  {
    srNo: 5,
    classification: "Enzymes",
    ingredient: "Alpha Amylase, Papain, Pepsin Fungal Diastase",
    dosageForm: "Capsule",
  },
  {
    srNo: 6,
    classification: "Multivitamin, Amino Acid, Mineral",
    ingredient: "L-Glutamine, Vit. A, Vit. C, Selenium",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 7,
    classification: "Enzyme Preparation",
    ingredient: "Saccharomyces Boulardii, Lactic Acid Bacillus with Zinc",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 8,
    classification: "Enzyme with Multivitamins",
    ingredient: "Papain, Fungal Diastase, Niacinamide, Vit. B1 & Vit. B6",
    dosageForm: "Syrup (100 ml)",
  },
  {
    srNo: 9,
    classification: "Enzyme Preparation",
    ingredient:
      "Saccharomyces Boulardii, Racecadotril, Zinc, Lactic Acid Bacillus",
    dosageForm: "Powder (Sachet)",
  },
  {
    srNo: 10,
    classification: "Enzyme Preparation",
    ingredient:
      "Papain, Fungal Diastase, Niacinamide, Vit. B1, Vit. B6, Vit. B12, Vit. B2, D-Panthenol",
    dosageForm: "Syrup (100 ml)",
  },
];

const GastroIntestinalSupplements = () => <SupplementDetail categoryKey="gastro" data={data} />;

export default GastroIntestinalSupplements;
