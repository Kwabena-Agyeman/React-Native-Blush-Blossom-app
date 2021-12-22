import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectionProductsScreen from "../screens/CollectionProductsScreen";
import CollectionScreen from "../screens/CollectionScreen";
import Routes from "./Routes";

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // headerRight: () => {
        //   return <Button title="Back" />;
        // },
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
    </Stack.Navigator>
  );
};

export default ShopNavigation;
