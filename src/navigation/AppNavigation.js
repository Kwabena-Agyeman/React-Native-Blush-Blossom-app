/** @format */
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import ShopNavigation from "./ShopNavigation";
import Routes from "./Routes";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-home-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={Routes.ShopScreen}
        component={ShopNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={Routes.AccountScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
