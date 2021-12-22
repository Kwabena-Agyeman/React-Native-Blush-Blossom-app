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
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      {collections.map((collection) => (
        <TouchableOpacity
          key={collection.id}
          style={{
            width: "45%",
            height: 200,
            borderRadius: 20,
            overflow: "hidden",
            margin: 5,
          }}
        >
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0%",
              left: "0%",
              zIndex: 999,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colors.text.inverse,
                fontFamily: fonts.fonts.body,
                fontSize: fonts.fontSizes.h5,
                textAlign: "center",
              }}
            >
              {collection.title}
            </Text>
          </View>
          <Image
            source={{ uri: collection.image.src }}
            style={{
              width: "100%",
              height: 200,
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({});
