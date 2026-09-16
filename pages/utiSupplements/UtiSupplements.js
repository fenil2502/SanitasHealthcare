import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

const data = [
  {
    srNo: 1,
    classification: "Extract Preparation",
    ingredient: "Cranberry & Hibiscus",
    dosageForm: "Capsule",
  },
  {
    srNo: 2,
    classification: "Extract Preparation",
    ingredient: "D-Mannose, Propolis Ext. & Pomegranate Ext.",
    dosageForm: "Tablet",
  },
  {
    srNo: 3,
    classification: "Extract Preparation",
    ingredient: "Cranberry & D-Mannose",
    dosageForm: "Tablet",
  },
  {
    srNo: 4,
    classification: "Extract Preparation",
    ingredient: "Cranberry Ext., D-Mannose Ext., Hibiscus Ext.",
    dosageForm: "Tablet",
  },
];

const UtiSupplements = () => <SupplementDetail categoryKey="uti" data={data} />;

export default UtiSupplements;
