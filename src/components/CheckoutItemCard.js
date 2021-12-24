import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import { Feather, AntDesign } from "@expo/vector-icons";
import colors from "../theme/colors";

const CheckoutItemCard = ({ product }) => {
  const [quantityState, setQuantityState] = useState(product.quantity);
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
        <View style={styles.bottomDetailsRow}>
          <View style={styles.quantityContainer}>
            <TouchableHighlight
              underlayColor={"rgba(255,255,255,1)"}
              onPress={() => console.log("add")}
            >
              <Feather name="plus-square" size={28} color="black" />
            </TouchableHighlight>
            <Text style={styles.quantity}>{quantityState}</Text>
            <TouchableHighlight
              underlayColor={"rgba(255,255,255,1)"}
              onPress={() => console.log("remove")}
            >
              <Feather name="minus-square" size={28} color="black" />
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            underlayColor={"rgba(255,255,255,1)"}
            onPress={() => console.log("remove")}
          >
            <AntDesign name="close" size={20} color="gray" />
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
  bottomDetailsRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: spacing.md,
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
    color: colors.brand.primary,
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.title,
  },
  deleteButton: {
    bottom: 30,
    position: "absolute",
    right: 20,
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
    color: colors.brand.primary,
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
    width: "70%",
  },
});
