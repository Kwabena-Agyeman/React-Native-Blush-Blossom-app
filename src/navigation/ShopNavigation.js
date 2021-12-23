import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectionProductsScreen from "../screens/CollectionProductsScreen";
import CollectionScreen from "../screens/CollectionScreen";
import ProductScreen from "../screens/ProductScreen";
import Routes from "./Routes";

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "card",
      }}
    >
      <Stack.Screen
        name={Routes.CollectionScreen}
        component={CollectionScreen}
      />
      <Stack.Screen
        name={Routes.CollectionProductsScreen}
        component={CollectionProductsScreen}
      />
      <Stack.Screen name={Routes.ProductScreen} component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
