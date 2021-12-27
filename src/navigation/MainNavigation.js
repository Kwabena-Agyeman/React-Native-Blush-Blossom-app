import React, { useState } from "react";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthentication,
  setUser,
  setCheckout,
} from "../redux/slices/shopSlice";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

import { Marcellus_400Regular } from "@expo-google-fonts/marcellus";
import { Muli_400Regular } from "@expo-google-fonts/muli";
import { useFonts } from "expo-font";

const MainNavigation = () => {
  const [appReady, setAppReady] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.shop.isAuthenticated);
  let [fontsLoaded] = useFonts({
    Muli_400Regular,
    Marcellus_400Regular,
  });

  LogBox.ignoreLogs([
    "Warning: Async Storage has been extracted from react-native core",
  ]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setAuthentication(true));
      dispatch(setUser({ uid: user.uid, email: user.email }));

      console.log("User signed in");
      setAppReady(true);
    } else {
      dispatch(setAuthentication(false));
      dispatch(setUser({}));
      dispatch(
        setCheckout({
          id: "",
          webUrl: "",
        })
      );
      console.log("User is signed out");
      setAppReady(true);
    }
  });

  if (!fontsLoaded || !appReady) {
    return <AppLoading />;
  }

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
