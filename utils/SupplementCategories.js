import { Routes } from "../navigation/NavigationLib";

/**
 * Single source of truth for the supplement (portfolio detail) pages.
 * Every detail page renders from this list, so the side navigation,
 * hero art and copy stay in sync across all of them.
 */
export const SupplementCategories = [
  {
    key: "orthopedic",
    label: "Orthopedic Supplements",
    route: Routes.orthopedicsupplements,
    image: "/ortho.jpg",
    tagline: "Bone, joint & mobility care",
    description:
      "Calcium, collagen and joint-care formulations developed for bone density, cartilage support and everyday mobility.",
  },
  {
    key: "immunity",
    label: "Immunity Supplements",
    route: Routes.immunitysupplements,
    image: "/Immunity-Supplements.jpg",
    tagline: "Daily defence & recovery",
    description:
      "Multivitamin, mineral and herbal-extract blends that support natural immunity, energy levels and faster recovery.",
  },
  {
    key: "gynec",
    label: "Gynec & Infertility Supplements",
    route: Routes.gynecinfertilitysupplements,
    image: "/Gynec-Infertility-Supply.jpg",
    tagline: "Women's health & fertility",
    description:
      "Prenatal, hormonal balance and fertility support formulations built around clinically familiar actives.",
  },
  {
    key: "pediatric",
    label: "Pediatric Supplements",
    route: Routes.pediatricsupplements,
    image: "/Pediatric-Supplement.jpg",
    tagline: "Growth & nutrition for children",
    description:
      "Child-friendly syrups, drops and chewables for growth, appetite and micronutrient gaps in early years.",
  },
  {
    key: "gastro",
    label: "Gastro Intestinal Supplements",
    route: Routes.gastrointestinalsupplements,
    image: "/Gastro-Intestinal-Supplements.jpg",
    tagline: "Digestive comfort & gut flora",
    description:
      "Probiotic, prebiotic and enzyme preparations that support digestion, gut flora and intestinal comfort.",
  },
  {
    key: "liver",
    label: "Liver Supplements",
    route: Routes.liversupplement,
    image: "/Liver-supplements.jpg",
    tagline: "Hepatic support & detox",
    description:
      "Hepatoprotective actives and herbal extracts formulated to support liver function and metabolic health.",
  },
  {
    key: "skinhair",
    label: "Skin & Hair Supplements",
    route: Routes.skinhairsupplements,
    image: "/Skin-hair-Supplement.jpg",
    tagline: "Beauty from within",
    description:
      "Biotin, collagen and antioxidant combinations aimed at hair strength, skin texture and nail health.",
  },
  {
    key: "uti",
    label: "UTI Supplements",
    route: Routes.utisupplements,
    image: "/uti-supp.jpg",
    tagline: "Urinary tract wellness",
    description:
      "Cranberry, D-Mannose and alkaliser based preparations for urinary tract comfort and maintenance.",
  },
  {
    key: "appetizer",
    label: "Appetizer Supplements",
    route: Routes.appetizersupplements,
    image: "/Appetizer.jpg",
    tagline: "Appetite & enzyme support",
    description:
      "Enzyme preparations and appetite stimulants available as palatable syrups and drops.",
  },
  {
    key: "protein",
    label: "Protein Supplements",
    route: Routes.proteinsupplement,
    image: "/Protein-Supplement.jpg",
    tagline: "Everyday & clinical nutrition",
    description:
      "Whey, soy and plant protein blends with vitamins and minerals for daily and convalescent nutrition.",
  },
  {
    key: "weightloss",
    label: "Weight Loss Supplements",
    route: Routes.weightloss,
    image: "/weight-loss.jpg",
    tagline: "Metabolic & weight management",
    description:
      "Standardised botanical extracts and fat-metabolism actives for structured weight management programmes.",
  },
];

export const getSupplementCategory = (key) =>
  SupplementCategories.find((category) => category.key === key);

/** Groups a dosage form into a pill colour family used by the detail page. */
export const getDosageFormVariant = (dosageForm = "") => {
  const form = dosageForm.toLowerCase();
  if (form.includes("tablet")) return "tablet";
  if (form.includes("capsule")) return "capsule";
  if (form.includes("syrup") || form.includes("drop") || form.includes("suspension"))
    return "liquid";
  return "powder";
};
