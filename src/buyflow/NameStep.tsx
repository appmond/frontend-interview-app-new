import React from 'react'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { buyflowActionCreators } from '../state'
import { bindActionCreators } from '@reduxjs/toolkit'

const NameStep: React.FC = () => {
  const dispatch = useAppDispatch()
  const { firstName, lastName } = useAppSelector(
    (state) => state.buyflowReducer
  )
  const { setFirstName, setLastName, setCurrentStep } = bindActionCreators(
    buyflowActionCreators,
    dispatch
  )
  return (
    <>
      <div>
        First Name:{' '}
        <input
          onChange={({ target: { value } }) => {
            setFirstName(value)
          }}
          value={firstName}
        ></input>
      </div>
      <div>
        Last Name:{' '}
        <input
          onChange={({ target: { value } }) => {
            setLastName(value)
          }}
          value={lastName}
        ></input>
      </div>
      <button onClick={() => setCurrentStep('summary')}>Next</button>
    </>
  )
}

export default NameStep
