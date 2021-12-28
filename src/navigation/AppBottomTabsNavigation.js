/** @format */
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import ShopNavigation from "./ShopNavigation";
import Routes from "./Routes";
import AccountScreen from "../screens/AccountScreen";
import HomeScreenNavigation from "./HomeScreenNavigation";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.HomeScreen}
    >
      <Tab.Screen
        name={Routes.HomeNavigation}
        component={HomeScreenNavigation}
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
        component={AccountScreen}
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
