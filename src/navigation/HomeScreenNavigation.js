import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/AuthScreen";

import Routes from "./Routes";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import ResetPasswordScreen from "../screens/ResetPassword";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "card",
        gestureEnabled: true,
      }}
      initialRouteName={Routes.AuthScreen}
    >
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />

      <Stack.Screen name={Routes.HomeProductScreen} component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigation;
