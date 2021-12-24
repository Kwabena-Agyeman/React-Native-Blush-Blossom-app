import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Platform,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/slices/shopSlice";
import { AntDesign } from "@expo/vector-icons";
import spacing from "../theme/spacing";
import fonts from "../theme/fonts";
import CheckoutItemCard from "./CheckoutItemCard";
import CartEmptyHeading from "./CartEmptyHeading";
import CheckoutTotalContainer from "./CheckoutTotalContainer";

const Checkout = () => {
  const modalVisible = useSelector((state) => state.shop.modalVisible);
  // const checkoutId = useSelector((state) => state.shop.checkout.id);
  const cartItems = useSelector((state) => state.shop.checkout.LineItems);
  const dispatch = useDispatch();

  const keyExtractor = useCallback((product) => product.variantId, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>My Cart</Text>
        <TouchableHighlight
          underlayColor={"rgba(0,0,0,0)"}
          style={styles.closeButton}
          onPress={() => dispatch(toggleModal(!modalVisible))}
        >
          <AntDesign name="close" size={34} color="black" />
        </TouchableHighlight>
      </View>
      {!cartItems.length ? <CartEmptyHeading /> : null}
      <FlatList
        data={cartItems}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => {
          return <CheckoutItemCard product={item} />;
        }}
        ListFooterComponent={
          cartItems.length ? <CheckoutTotalContainer /> : null
        }
      />
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: "flex-start",
    marginHorizontal: spacing.md3,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  heading: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.h4,
  },
  headingContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.md,
    paddingLeft: spacing.md,
    width: "100%",
  },
});
