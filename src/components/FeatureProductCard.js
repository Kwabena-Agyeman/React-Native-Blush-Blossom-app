/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import FeatureProductImage from "./FeatureProductImage";
import Routes from "../navigation/Routes";
import Favorite from "./Favorite";

const FeatureProductCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate(Routes.HomeNavigation, {
            screen: Routes.HomeProductScreen,
            params: {
              params: {
                title: product.title,
                image: product.images[0].src,
                price: product.variants[0].price,
                id: product.variants[0].id,
              },
            },
          });
        }}
      >
        <Favorite productId={product.id} />
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
    overflow: "visible",
    padding: spacing.sm,
    width: 220,
    zIndex: 2,
  },
  detailsContainer: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,.8)",
    // bottom: 20,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-around",
    overflow: "visible",
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
