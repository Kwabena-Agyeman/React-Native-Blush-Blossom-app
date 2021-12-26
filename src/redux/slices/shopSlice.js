import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, subtractItemFromCart } from "./cartUtility";
import { storeDataAsyncStorage } from "../../asyncStorage";
const initialState = {
  modalVisible: false,
  isAuthenticated: false,
  user: {},
  favorites: [],
  cart: [],
  checkout: {
    id: "",
    webUrl: "",
    LineItems: [],
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.checkout.LineItems = addItemToCart(
        state.checkout.LineItems,
        action.payload
      );
      storeDataAsyncStorage(state.checkout.LineItems);
    },
    subtractFromCart: (state, action) => {
      state.checkout.LineItems = subtractItemFromCart(
        state.checkout.LineItems,
        action.payload
      );
      storeDataAsyncStorage(state.checkout.LineItems);
    },
    clearItemFromCart: (state, action) => {
      let oldCartItems = state.checkout.LineItems;
      let newCartItems = oldCartItems.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.checkout.LineItems = newCartItems;
      storeDataAsyncStorage(state.checkout.LineItems);
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
      // state.checkout.id = action.payload.id;
      // state.checkout.LineItems = action.payload.lineItems;
      // state.checkout.webUrl = action.payload.webUrl;

      state.checkout = {
        ...state.checkout,
        id: action.payload.id,
        webUrl: action.payload.webUrl,
      };
    },
    setLineItems: (state, action) => {
      state.checkout.LineItems = action.payload;
    },
    toggleModal: (state, action) => {
      state.modalVisible = action.payload;
    },
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  addToCart,
  subtractFromCart,
  clearItemFromCart,
  addToFavorites,
  removeFromFavorites,
  setCheckout,
  setLineItems,
  toggleModal,
  setAuthentication,
  setUser,
} = shopSlice.actions;

export default shopSlice.reducer;
