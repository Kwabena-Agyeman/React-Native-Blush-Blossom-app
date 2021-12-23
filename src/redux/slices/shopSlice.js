import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalVisible: false,
  favorites: [],
  cart: [],
  checkout: {
    id: "",
    LineItems: [],
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
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
      state.checkout.id = action.payload.id;
      state.checkout.LineItems = action.payload.lineItems;
    },
    toggleModal: (state, action) => {
      state.modalVisible = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavorites,
  removeFromFavorites,
  setCheckout,
  toggleModal,
} = shopSlice.actions;

export default shopSlice.reducer;
