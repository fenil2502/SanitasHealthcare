import React from "react";
import SupplementDetail from "../../components/supplement/SupplementDetail";

const data = [
  {
    srNo: 1,
    classification: "Enzyme Preparation",
    ingredient: "Fungal Diastase With Pepsin",
    dosageForm: "Syrup",
  },
  {
    srNo: 2,
    classification: "Enzyme Preparation",
    ingredient: "Fungal Diastase With Pepsin",
    dosageForm: "Drop",
  },
];

const AppetizerSupplements = () => <SupplementDetail categoryKey="appetizer" data={data} />;

export default AppetizerSupplements;
