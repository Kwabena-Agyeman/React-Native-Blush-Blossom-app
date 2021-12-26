import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/AuthScreen";

import Routes from "./Routes";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import ResetPasswordScreen from "../screens/ResetPassword";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "card",
        gestureEnabled: true,
      }}
      initialRouteName={Routes.AuthScreen}
    >
      <Stack.Screen name={Routes.AuthScreen} component={AuthScreen} />
      <Stack.Screen name={Routes.RegisterScreen} component={RegisterScreen} />
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
      <Stack.Screen
        name={Routes.ResetPasswordScreen}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
