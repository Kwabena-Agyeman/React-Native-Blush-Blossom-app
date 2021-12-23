import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

const Favorite = ({ productId }) => {
  const favorites = useSelector((state) => state.shop.favorites);

  const inFavorites = favorites.some((favoriteId) => favoriteId === productId);

  return (
    <TouchableOpacity
      onPress={
        inFavorites ? () => console.log("hello") : () => console.log("bye")
      }
      style={styles.FavIcon}
    >
      <FontAwesome
        name={inFavorites ? "heart" : "heart-o"}
        size={30}
        color={inFavorites ? "red" : "black"}
      />
    </TouchableOpacity>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  FavIcon: {
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 999,
  },
});
