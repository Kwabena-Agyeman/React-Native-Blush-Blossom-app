import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import { AntDesign, Feather } from "@expo/vector-icons";
const CheckoutItemCard = ({ product }) => {
  //   console.log("HEREE", product.product);
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          source={{ uri: product.variant.image.src }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.currency}>
          <Text>$</Text> {product.variant.price}
        </Text>
        <View style={styles.quantityContainer}>
          <TouchableHighlight>
            <Feather name="plus-square" size={28} color="black" />
          </TouchableHighlight>
          <Text style={styles.quantity}>{product.quantity}</Text>
          <TouchableHighlight>
            <Feather name="minus-square" size={28} color="black" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default CheckoutItemCard;

const styles = StyleSheet.create({
  ImageContainer: {
    // backgroundColor: "blue",
    height: "100%",
    padding: spacing.md,
    width: "50%",
  },
  container: {
    alignItems: "center",
    // backgroundColor: "red",
    flexDirection: "row",
    height: 200,
    justifyContent: "space-between",
    width: "100%",
  },
  currency: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.title,
  },
  detailsContainer: {
    // backgroundColor: "pink",
    height: "100%",
    justifyContent: "space-evenly",
    padding: spacing.md,
    width: "50%",
  },
  image: {
    borderRadius: spacing.md,
    height: "100%",
    width: "100%",
  },
  quantity: {
    fontSize: fonts.fontSizes.body,
  },
  quantityContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  title: {
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.h5,
    // width: "%",
  },
});
