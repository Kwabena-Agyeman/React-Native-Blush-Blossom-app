import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import fonts from "../theme/fonts";
import * as WebBrowser from "expo-web-browser";

import spacing from "../theme/spacing";
import { client } from "../shopify";
import colors from "../theme/colors";

const CheckoutTotalContainer = () => {
  const cartItems = useSelector((state) => state.shop.checkout.LineItems);
  const checkoutId = useSelector((state) => state.shop.checkout.id);
  const webUrl = useSelector((state) => state.shop.checkout.webUrl);

  let total = 0;
  cartItems.map((item) => {
    let itemTotal = item.price * item.quantity;

    return (total = total + itemTotal);
  });

  const processCheckout = async () => {
    let LineItems = [];
    cartItems.map((item) => {
      LineItems.push({
        variantId: item.id,
        quantity: item.quantity,
      });
    });
    console.log(LineItems);

    await client.checkout.addLineItems(checkoutId, LineItems);

    WebBrowser.openBrowserAsync(webUrl);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>${total}.00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => processCheckout()}
        >
          <Text style={styles.buttonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CheckoutTotalContainer;

const styles = StyleSheet.create({
  Button: {
    fontSize: fonts.fontSizes.button,
    padding: spacing.md,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    alignItems: "center",
    color: "white",
  },
  checkoutButton: {
    alignItems: "center",
    backgroundColor: colors.brand.primary,
    borderRadius: spacing.md,
    justifyContent: "center",
    padding: spacing.md3,
    width: "50%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.lg,
  },
  total: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.title,
  },
});
