/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { Marcellus_400Regular } from "@expo-google-fonts/marcellus";
import { Muli_400Regular } from "@expo-google-fonts/muli";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/AppNavigation";
import navTheme from "./src/navigation/NavigationTheme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Muli_400Regular,
    Marcellus_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <NavigationContainer theme={navTheme}>
        <AppNavigation />
        <StatusBar style='auto' />
      </NavigationContainer>
    </>
  );
}
