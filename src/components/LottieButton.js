import React, { useRef } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/shopSlice";

const LottieButton = (product) => {
  const { title, image, price, id } = product.product;

  const dispatch = useDispatch();
  const animate = useRef(null);

  const AddToCart = async (Product) => {
    dispatch(addToCart(Product));
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        animate.current.play();
        AddToCart({ title, image, price, id });
      }}
    >
      <View style={styles.lottie}>
        <LottieView
          ref={animate}
          source={require("../../assets/animations/ADDTOCART.json")}
          autoPlay={false}
          loop={false}
          //   autoSize
          //   onAnimationFinish={() => animate.current.reset()}
          style={styles.lottieView}
        />
      </View>
    </TouchableOpacity>
  );
};

export default LottieButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 99,
  },
  lottie: {
    alignItems: "center",
    justifyContent: "center",
  },
  lottieView: {
    height: 200,
    width: 200,
  },
});
