import React from "react";
import { LogBox } from "react-native";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAuthentication, setUser } from "../redux/slices/shopSlice";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

const MainNavigation = () => {
  LogBox.ignoreLogs([
    "Warning: Async Storage has been extracted from react-native core",
  ]);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.shop.isAuthenticated);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setAuthentication(true));
      dispatch(setUser({ uid: user.uid, email: user.email }));
      // console.log(user);
      // const uid = user.uid;
      // console.log(
      //   "User is signed in, see docs for a list of available properties https://firebase.google.com/docs/reference/js/firebase.User",
      //   uid
      // );
    } else {
      dispatch(setAuthentication(false));
      console.log("User is signed out");
    }
  });

  if (!isAuthenticated) {
    return <AuthNavigation />;
  } else {
    return <AppNavigation />;
  }

  // return (
  //   <NavigationContainer theme={navTheme}>
  //     {!isAuthenticated ? <AuthScreen /> : <AppNavigation />}
  //   </NavigationContainer>
  // );
};

export default MainNavigation;
