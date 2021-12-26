/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import MainNavigation from "./src/navigation/MainNavigation";
import navTheme from "./src/navigation/NavigationTheme";

LogBox.ignoreLogs([
  "Warning: Async Storage has been extracted from react-native core",
]);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer theme={navTheme}>
          <MainNavigation />
        </NavigationContainer>
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
