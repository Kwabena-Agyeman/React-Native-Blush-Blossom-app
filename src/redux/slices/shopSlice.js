import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  cart: [],
  checkout: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      let oldFavorites = state.favorites;

      let newFavorites = oldFavorites.filter((fav) => fav !== action.payload);

      state.favorites = newFavorites;
    },
    setCheckout: (state, action) => {
      state.checkout = action.payload;
    },
  },
});

export const { addToCart, addToFavorites, removeFromFavorites, setCheckout } =
  shopSlice.actions;

export default shopSlice.reducer;
