import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

import fonts from "../theme/fonts";
import colors from "../theme/colors";
import spacing from "../theme/spacing";
import AndroidBackButton from "../components/AndroidBackButton";
import LottieButton from "../components/LottieButton";

const ProductScreen = () => {
  const route = useRoute();

  const { title, image, price, id } = route.params.params;

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <AndroidBackButton />
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.currency}>
          $ <Text style={styles.price}>{parseInt(price, 10)}.00</Text>
        </Text>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => AddToCart({ title, image, price, id })}
        >
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity> */}
        <LottieButton product={{ title, image, price, id }} />
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  backButton: {
    left: 20,
    position: "absolute",
    top: 60,
    zIndex: 1,
  },
  button: {
    backgroundColor: colors.brand.primary,
    borderRadius: spacing.md,
    padding: spacing.md3,
  },
  buttonText: {
    color: colors.bg.primary,
  },
  container: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  currency: {
    color: colors.brand.primary,
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.title,
  },
  detailsContainer: {
    alignItems: "center",
    height: "20%",
    justifyContent: "flex-start",
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
