import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

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

const LiverSupplement = () => <SupplementDetail categoryKey="liver" data={data} />;

export default LiverSupplement;
