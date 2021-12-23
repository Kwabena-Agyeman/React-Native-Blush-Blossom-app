import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const ProductScreen = () => {
  const route = useRoute();
  const { title, image } = route.params.params;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: "70%",
        }}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
