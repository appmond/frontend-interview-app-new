import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { buyflowActionCreators } from '../state'
import { bindActionCreators } from '@reduxjs/toolkit'

const SummaryStep: React.FC = () => {
  const dispatch = useAppDispatch()
  const { email, age, firstName, lastName } = useAppSelector(
    (state) => state.buyflowReducer
  )
  const { setCurrentStep } = bindActionCreators(buyflowActionCreators, dispatch)
  return (
    <>
      <div>Email: {email}</div>
      <div>Age: {age}</div>
      <div>Firstname: {firstName}</div>
      <div>Lastname: {lastName}</div>
      <div>
        <Link onClick={() => setCurrentStep('email')} to="/purchased=dev_ins">
          Purchase
        </Link>
      </div>
    </>
  )
}

export default SummaryStep
