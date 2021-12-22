import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";

const CollectionProductCard = ({ product }) => {
  return (
    <TouchableOpacity key={product.id} style={styles.container}>
      <Image
        source={{ uri: product.images[0].src }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.titleText}>
          {product.title}
        </Text>
        <Text style={styles.priceText}>
          ${parseInt(product.variants[0].price, 10)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionProductCard;

const styles = StyleSheet.create({
  container: {
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    // borderRadius: 20,
    elevation: 3,
    height: 250,
    marginBottom: spacing.md2,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    width: 180,
  },
  detailsContainer: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,.8)",
    bottom: 0,
    flexDirection: "row",
    height: 40,
    justifyContent: "space-around",
    padding: spacing.sm,
    position: "absolute",
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  priceText: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.button,
  },
  titleText: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.button,
    width: "80%",
  },
});
