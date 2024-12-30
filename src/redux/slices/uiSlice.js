import { createSlice } from "@reduxjs/toolkit";

const facts = [
  "Did you know? Global e-commerce sales are expected to reach $6.3 trillion by 2024!",
  "Fun fact: Over 2 billion people made online purchases in 2023!",
  "Surprising stat: 63% of shopping journeys start online, even if the purchase happens in-store.",
  "Mobile commerce accounts for nearly 73% of all e-commerce sales worldwide.",
  "Fast shipping increases the likelihood of purchase by 87%!",
];

const initialState = {
  loadingText: facts
};
  
  const uiSlice = createSlice({
    name: 'uiRedux',
    initialState,
    // reducers: {
    //   toggle(state) {
    //     state.cartVisibility = !state.cartVisibility; 
    //   },
    // },
  });
  
  export const uiActions = uiSlice.actions;
  export default uiSlice;