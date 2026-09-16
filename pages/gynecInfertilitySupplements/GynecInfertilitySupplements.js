import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

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

const GynecInfertilitySupplements = () => <SupplementDetail categoryKey="gynec" data={data} />;

export default GynecInfertilitySupplements;
