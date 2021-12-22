/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import FeatureProductImage from "./FeatureProductImage";

const FeatureProductCard = ({ product }) => {
  return (
    <>
      {/* {!favorites.some((favoriteId) => favoriteId === product.id) ? (
        <View>
          <TouchableOpacity
            onPress={() => toggleFavorite(product.id, product)}
            style={{
              position: "absolute",
              zIndex: 999,
              top: 20,
              right: 30,
            }}
          >
            <FontAwesome name='heart-o' size={24} color='black' />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => toggleFavorite(product.id, product)}
            style={{
              position: "absolute",
              zIndex: 999,
              top: 20,
              right: 30,
            }}
          >
            <FontAwesome name='heart' size={24} color='#fb3958' />
          </TouchableOpacity>
        </View>
      )} */}

      <TouchableOpacity style={styles.container}>
        <FeatureProductImage image={product.images[0].src} />
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.titleText}>
            {product.title}
          </Text>
          <Text style={styles.priceText}>
            ${parseInt(product.variants[0].price, 10)}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(FeatureProductCard);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    height: 300,
    justifyContent: "center",
    overflow: "hidden",
    padding: spacing.sm,
    width: 220,
  },
  detailsContainer: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,.8)",
    // bottom: 20,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-around",
    overflow: "hidden",
    // padding: spacing.sm,
    // position: "absolute",

    width: "100%",
  },
  priceText: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.button,
  },
  subtitle: {
    fontFamily: fonts.fonts.title,
    fontSize: 18,
  },
  title: {
    fontFamily: fonts.fonts.body,
    fontSize: 16,
    textAlign: "center",
    width: "60%",
  },
  titleText: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.button,
    width: "80%",
  },
});
