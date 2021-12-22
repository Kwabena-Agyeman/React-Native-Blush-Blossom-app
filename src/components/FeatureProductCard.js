/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import ProductCardImage from "./ProductCardImage";

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
        <ProductCardImage image={product.images[0].src} />
        <Text numberOfLines={1} style={styles.title}>
          {product.title}
        </Text>
        <Text style={styles.subtitle}>$ {product.variants[0].price}</Text>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(FeatureProductCard);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: spacing.sm,
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
});
