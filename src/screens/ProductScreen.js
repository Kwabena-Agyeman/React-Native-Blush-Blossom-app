import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/shopSlice";
import { client } from "../shopify";

import Routes from "../navigation/Routes";
import fonts from "../theme/fonts";
import colors from "../theme/colors";
import spacing from "../theme/spacing";
import AndroidBackButton from "../components/AndroidBackButton";

const ProductScreen = () => {
  const checkoutId = useSelector((state) => state.shop.checkout.id);
  const route = useRoute();
  const { title, image, price, variantId } = route.params.params;

  console.log("HERE", checkoutId);
  const AddToCart = async (Vid) => {
    const lineItemToAdd = [
      {
        variantId: Vid,
        quantity: 1,
      },
    ];

    const response = await client.checkout.addLineItems(
      checkoutId,
      lineItemToAdd
    );

    console.log(response);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <AndroidBackButton route={Routes.CollectionScreen} />
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.currency}>
          $ <Text style={styles.price}>{parseInt(price, 10)}.00</Text>
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => AddToCart(variantId)}
        >
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
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
