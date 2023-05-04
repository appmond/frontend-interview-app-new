import React from 'react'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { buyflowActionCreators } from '../state'
import { bindActionCreators } from '@reduxjs/toolkit'

const EmailStep: React.FC = () => {
  const dispatch = useAppDispatch()
  const { email } = useAppSelector((state) => state.buyflowReducer)
  const { setEmail, setCurrentStep } = bindActionCreators(
    buyflowActionCreators,
    dispatch
  )
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button onClick={() => setCurrentStep('age')}>Next</button>
    </>
  )
}

export default EmailStep
