import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import fonts from "../theme/fonts";
import colors from "../theme/colors";
import spacing from "../theme/spacing";

const ProductScreen = () => {
  const route = useRoute();
  const { title, image, price } = route.params.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.currency}>
          $ <Text style={styles.price}>{parseInt(price, 10)}.00</Text>
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.brand.primary,
    borderRadius: spacing.md,
    padding: spacing.md3,
  },
  buttonText: {
    color: colors.bg.primary,
  },
  container: {
    flex: 1,
  },
  currency: {
    color: colors.brand.primary,
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.title,
  },
  detailsContainer: {
    alignItems: "center",
    height: "20%",
    justifyContent: "space-evenly",
  },
  image: {
    height: "80%",
    width: "100%",
  },
  price: {
    color: colors.brand.secondary,
  },
  title: {
    fontFamily: fonts.fonts.heading,
    fontSize: 30,
  },
});
