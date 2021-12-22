/** @format */

import React from "react";
import { Image, StyleSheet, View } from "react-native";

const FeatureProductImage = ({ image }) => {
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

export default React.memo(FeatureProductImage);

const styles = StyleSheet.create({
  Image: {
    // borderRadius: 10,
    height: "100%",
    overflow: "hidden",
    resizeMode: "cover",
    width: "100%",
  },
  ImageContainer: {
    height: 250,
    overflow: "hidden",
    width: "100%",
  },
});
