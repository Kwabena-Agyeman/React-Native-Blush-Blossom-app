import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectionProductsScreen from "../screens/CollectionProductsScreen";
import CollectionScreen from "../screens/CollectionScreen";
const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
      <Stack.Screen
        name="CollectionProductsScreen"
        component={CollectionProductsScreen}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
