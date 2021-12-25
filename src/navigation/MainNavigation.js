import React from "react";
import { Text, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAuthentication } from "../redux/slices/shopSlice";

import AppNavigation from "./AppNavigation";
import AuthScreen from "../screens/AuthScreen";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.shop.isAuthenticated);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setAuthentication(true));
      const uid = user.uid;
      console.log(
        "User is signed in, see docs for a list of available properties https://firebase.google.com/docs/reference/js/firebase.User",
        uid
      );
    } else {
      dispatch(setAuthentication(false));
      console.log("User is signed out");
    }
  });

  if (!isAuthenticated) {
    return <AuthScreen />;
  } else {
    return <AppNavigation />;
  }
};

export default MainNavigation;
