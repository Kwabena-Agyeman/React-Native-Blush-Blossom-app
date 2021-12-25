import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLineItems } from "../redux/slices/shopSlice";
import { storeDataAsyncStorage } from "../asyncStorage";
import fonts from "../theme/fonts";
import * as WebBrowser from "expo-web-browser";

import spacing from "../theme/spacing";
import { client } from "../shopify";
import colors from "../theme/colors";

const CheckoutTotalContainer = () => {
  const cartItems = useSelector((state) => state.shop.checkout.LineItems);
  const checkoutId = useSelector((state) => state.shop.checkout.id);
  const webUrl = useSelector((state) => state.shop.checkout.webUrl);
  const dispatch = useDispatch();

  let total = 0;
  cartItems.map((item) => {
    let itemTotal = item.price * item.quantity;

    return (total = total + itemTotal);
  });

  const ResetCart = () => {
    storeDataAsyncStorage([]);

    dispatch(setLineItems([]));
  };

  const processCheckout = async () => {
    let LineItems = [];
    cartItems.map((item) => {
      LineItems.push({
        variantId: item.id,
        quantity: item.quantity,
      });
    });
    // console.log(LineItems);

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
        <TouchableOpacity
          style={styles.clearCartButton}
          onPress={() => ResetCart()}
        >
          <Text style={styles.clearCartText}>CLEAR CART</Text>
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
  clearCartButton: {
    marginBottom: spacing.lg3,
    marginTop: spacing.lg3,
  },
  clearCartText: {
    color: colors.brand.primary,
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
