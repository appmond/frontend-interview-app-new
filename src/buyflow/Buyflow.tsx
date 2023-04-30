import React from "react";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import SummaryStep from "./SummaryStep";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { buyflowActionCreators } from "../state";
import { bindActionCreators } from "@reduxjs/toolkit";

interface BuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins"
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance"
};

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.buyflowReducer);
  const { setAge, setEmail, setCurrentStep } = bindActionCreators(
    buyflowActionCreators,
    dispatch
  );
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    setCurrentStep(nextStep);
  };
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === "email" && <EmailStep cb={getStepCallback("age")} />) ||
        (currentStep === "age" && (
          <AgeStep cb={getStepCallback("summary")} />
        )) ||
        (currentStep === "summary" && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  );
};

export default Buyflow;
