/** @format */

import { Inter_100Thin } from "@expo-google-fonts/inter";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import spacing from "../theme/spacing";

const ProductCardImage = ({ image }) => {
  return (
    <View
      style={{
        overflow: "hidden",
        padding: spacing.md,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 200,
          height: 300,
          borderRadius: 10,
          overflow: "hidden",
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default ProductCardImage;

const styles = StyleSheet.create({});
