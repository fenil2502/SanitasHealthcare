import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

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

const ProteinSupplement = () => <SupplementDetail categoryKey="protein" data={data} />;

export default ProteinSupplement;
