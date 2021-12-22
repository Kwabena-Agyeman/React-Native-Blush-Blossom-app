/** @format */

import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { client } from "../shopify";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  const fetchAllCollections = async () => {
    let data = await client.collection.fetchAllWithProducts();
    setCollections(data);
  };

  useEffect(() => fetchAllCollections());
  return (
    <View style={styles.container}>
      {collections.map((collection) => (
        <TouchableOpacity key={collection.id} style={styles.buttonContainer}>
          <View style={styles.overlayContainer}>
            <Text style={styles.overlayText}>{collection.title}</Text>
          </View>
          <Image
            source={{ uri: collection.image.src }}
            style={styles.overlayImage}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    height: 200,
    margin: 5,
    overflow: "hidden",
    width: "45%",
  },
  container: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  overlayContainer: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100%",
    justifyContent: "center",
    left: "0%",
    position: "absolute",
    top: "0%",
    width: "100%",
    zIndex: 999,
  },
  overlayImage: {
    height: 200,
    width: "100%",
  },
  overlayText: {
    color: colors.text.inverse,
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.h5,
    textAlign: "center",
  },
});
