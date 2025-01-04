import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalQuantity: 0,
    totalCost: 0
};

const cartSlice = createSlice({
  name: 'uiRedux',
  initialState,
  reducers: {
    addToCart(state, action) {
        const product = action.payload; 
        const existingProduct = state.products.find(item => item.id === product.id);
  
        if (existingProduct) {
          existingProduct.quantity += 1;
          existingProduct.totalPrice += product.price; 
        } else {
          state.products.push({
            ...product,
            quantity: 1,
            totalPrice: product.price,
          });
        }
  
        state.totalQuantity += 1; 
        state.totalCost += product.price; 
      },
      removeFromCart(state, action) {
        const productId = action.payload
        const existingProduct = state.products.find(item => item.id === productId);
      
        if (existingProduct) {
          if (existingProduct.quantity === 1) {
            // Remove product entirely
            state.products = state.products.filter(item => item.id !== productId);
            state.totalQuantity -= 1;
            state.totalCost -= existingProduct.price;
          } else {
            existingProduct.quantity -= 1;
            existingProduct.totalPrice -= existingProduct.price;
            state.totalQuantity -= 1;
            state.totalCost -= existingProduct.price;
          }
        }
      }
      
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice;