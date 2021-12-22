/** @format */

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import spacing from "../theme/spacing";

const ProductCardImage = ({ image }) => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.Image}
      />
    </View>
  );
};

export default React.memo(ProductCardImage);

const styles = StyleSheet.create({
  Image: {
    // borderRadius: 10,
    height: 300,
    overflow: "hidden",
    resizeMode: "cover",
    width: 200,
  },
  ImageContainer: {
    overflow: "hidden",
    padding: spacing.md,
  },
});
