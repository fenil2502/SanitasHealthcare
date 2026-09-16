import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

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

const ImmunitySupplements = () => <SupplementDetail categoryKey="immunity" data={data} />;

export default ImmunitySupplements;
