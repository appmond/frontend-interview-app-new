import React from 'react'
import { AgeStep, EmailStep, NameStep, SummaryStep } from './'
import { useAppSelector } from '../state/hooks'
import { PRODUCT_IDS_TO_NAMES } from '../config/constants'

const Buyflow: React.FC = () => {
  const { currentStep, selectedProduct } = useAppSelector(
    (state) => state.buyflowReducer
  )
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[selectedProduct]}</h4>
      {currentStep === 'email' ? (
        <EmailStep />
      ) : currentStep === 'age' ? (
        <AgeStep />
      ) : currentStep === 'name' ? (
        <NameStep />
      ) : (
        <SummaryStep />
      )}
    </>
  )
}

export default Buyflow
