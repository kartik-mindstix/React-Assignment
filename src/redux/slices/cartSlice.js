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
        const product = action.payload; // Full product object (id, name, price, etc.)
        const existingProduct = state.products.find(item => item.id === product.id);
  
        if (existingProduct) {
          existingProduct.quantity += 1; // Increment quantity if already in the cart
          existingProduct.totalPrice += product.price; // Update total price for this product
        } else {
          state.products.push({
            ...product,
            quantity: 1,
            totalPrice: product.price,
          });
        }
  
        state.totalQuantity += 1; // Update total quantity of items in the cart
        state.totalCost += product.price; // Update total cost
      },
      removeFromCart(state, action) {
        const productId = action.payload; // ID of the product to remove
        const existingProduct = state.products.find(item => item.id === productId);
      
        if (existingProduct) {
          if (existingProduct.quantity === 1) {
            // Remove product entirely
            state.products = state.products.filter(item => item.id !== productId);
            state.totalQuantity -= 1;
            state.totalCost -= existingProduct.price;
          } else {
            // Decrement quantity and update total price
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