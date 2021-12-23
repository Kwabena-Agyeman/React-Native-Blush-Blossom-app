import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  cart: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = shopSlice.actions;

export default shopSlice.reducer;
