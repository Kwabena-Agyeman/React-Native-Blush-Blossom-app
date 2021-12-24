import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/slices/shopSlice";

import Routes from "../navigation/Routes";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

const CartEmptyHeading = () => {
  const modalVisible = useSelector((state) => state.shop.modalVisible);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kindly add products to cart</Text>
      <Button
        title="Go to collections"
        color={colors.brand.primary}
        onPress={() => {
          dispatch(toggleModal(!modalVisible));
          navigation.navigate(Routes.ShopScreen, {
            screen: Routes.CollectionScreen,
          });
        }}
      />
    </View>
  );
};

export default CartEmptyHeading;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 80,
    justifyContent: "space-between",
    width: "100%",
  },
  heading: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.title,
  },
});
