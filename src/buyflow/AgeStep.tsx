import React from 'react'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { buyflowActionCreators } from '../state'
import { bindActionCreators } from '@reduxjs/toolkit'
import { ProductIds } from '../config/constants'

const AgeStep: React.FC = () => {
  const dispatch = useAppDispatch()
  const { age, selectedProduct } = useAppSelector(
    (state) => state.buyflowReducer
  )
  const { setAge, setCurrentStep } = bindActionCreators(
    buyflowActionCreators,
    dispatch
  )
  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <button
        onClick={() =>
          setCurrentStep(
            selectedProduct === ProductIds.desInsurance ? 'name' : 'summary'
          )
        }
      >
        Next
      </button>
    </>
  )
}

export default AgeStep
