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

      <TouchableOpacity
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: spacing.sm,
        }}
      >
        <ProductCardImage image={product.images[0].src} />
        <Text
          numberOfLines={1}
          style={{
            fontSize: 16,
            fontFamily: fonts.fonts.body,
            width: "60%",
            textAlign: "center",
          }}
        >
          {product.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: fonts.fonts.title,
          }}
        >
          $ {product.variants[0].price}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(FeatureProductCard);

const styles = StyleSheet.create({});
