import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

const data = [
  {
    srNo: 1,
    classification: "Extract Preparation",
    ingredient: "Green Tea Extract",
    dosageForm: "Capsule",
  },
  {
    srNo: 2,
    classification: "Extract Preparation",
    ingredient: "Grape Seed Extract (Proanthocyanidin)",
    dosageForm: "Capsule",
  },
  {
    srNo: 3,
    classification: "Extract Preparation",
    ingredient:
      "Garcinia Cambogia, Green Tea Ext., Acaiberry, Chromium, Grape Seed Ext., L-Carnitine & Guarana",
    dosageForm: "Capsule",
  },
  {
    srNo: 4,
    classification: "Extract Preparation",
    ingredient: "Garcinia Cambogia, Calcium & Potassium",
    dosageForm: "Capsule",
  },
  {
    srNo: 5,
    classification: "Extract Preparation",
    ingredient: "Opuntia Cactus",
    dosageForm: "Capsule",
  },
];

const WeightLoss = () => <SupplementDetail categoryKey="weightloss" data={data} />;

export default WeightLoss;
