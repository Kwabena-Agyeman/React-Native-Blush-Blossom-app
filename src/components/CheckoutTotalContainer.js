import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";

const CheckoutTotalContainer = () => {
  const cartItems = useSelector((state) => state.shop.checkout.LineItems);

  let total = 0;
  cartItems.map((item) => {
    let itemTotal = item.price * item.quantity;

    return (total = total + itemTotal);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total</Text>
      <Text style={styles.total}>${total}.00</Text>
    </View>
  );
};

export default CheckoutTotalContainer;

const styles = StyleSheet.create({
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
