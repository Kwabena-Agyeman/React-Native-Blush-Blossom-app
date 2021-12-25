/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

import { LogBox } from "react-native";

import { Marcellus_400Regular } from "@expo-google-fonts/marcellus";
import { Muli_400Regular } from "@expo-google-fonts/muli";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigation from "./src/navigation/MainNavigation";
import navTheme from "./src/navigation/NavigationTheme";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);

export default function App() {
  let [fontsLoaded] = useFonts({
    Muli_400Regular,
    Marcellus_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Provider store={store}>
        <NavigationContainer theme={navTheme}>
          <MainNavigation />
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    </>
  );
}
