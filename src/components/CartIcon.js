import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/slices/shopSlice";
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors";

const CartIcon = () => {
  const modalVisible = useSelector((state) => state.shop.modalVisible);

  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback
      onPress={() => dispatch(toggleModal(!modalVisible))}
    >
      <View style={styles.container}>
        <View style={styles.cartIndicator} />
        <Feather name="shopping-bag" size={24} color="black" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  cartIndicator: {
    backgroundColor: colors.brand.primary,
    borderRadius: 7.5,
    height: 10,
    position: "absolute",
    right: -1,
    top: -2,
    width: 10,
    zIndex: -1,
  },
  container: {
    position: "absolute",
    right: 30,
    top: 20,
  },
});
