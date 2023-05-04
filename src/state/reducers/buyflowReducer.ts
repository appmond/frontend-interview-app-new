import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductIds } from '../../config/constants'

interface BuyflowState {
  selectedProduct: ProductIds
  currentStep: string
  email: string
  age: number
  firstName: string
  lastName: string
}

const initialState: BuyflowState = {
  selectedProduct: ProductIds.desInsurance,
  currentStep: 'email',
  email: '',
  age: 0,
  firstName: '',
  lastName: '',
}

const buyflowSlice = createSlice({
  name: 'buyflowReducer',
  initialState: initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<ProductIds>) {
      state.selectedProduct = action.payload
    },
    setCurrentStep(state, action: PayloadAction<string>) {
      state.currentStep = action.payload
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload
    },
  },
})
export const {
  setSelectedProduct,
  setCurrentStep,
  setEmail,
  setAge,
  setFirstName,
  setLastName,
} = buyflowSlice.actions
export default buyflowSlice.reducer
