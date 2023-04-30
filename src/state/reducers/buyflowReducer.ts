import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuyflowState {
  currentStep: string;
  email: string;
  age: number;
  firstName: string;
  lastName: string;
}

const initialState: BuyflowState = {
  currentStep: "email",
  email: "",
  age: 0,
  firstName: "",
  lastName: ""
};

const buyflowSlice = createSlice({
  name: "buyflowReducer",
  initialState: initialState,
  reducers: {
    setCurrentStep(state, action: PayloadAction<string>) {
      state.currentStep = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    }
  }
});
export const {
  setCurrentStep,
  setEmail,
  setAge,
  setFirstName,
  setLastName
} = buyflowSlice.actions;
export default buyflowSlice.reducer;
