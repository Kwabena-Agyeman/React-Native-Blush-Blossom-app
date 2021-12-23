import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/slices/shopSlice";
import { FontAwesome } from "@expo/vector-icons";

const Favorite = ({ productId }) => {
  const favorites = useSelector((state) => state.shop.favorites);
  const dispatch = useDispatch();

  const inFavorites = favorites.some((favoriteId) => favoriteId === productId);

  return (
    <TouchableHighlight
      underlayColor={"rgba(0,0,0,0)"}
      onPress={
        inFavorites
          ? () => dispatch(removeFromFavorites(productId))
          : () => dispatch(addToFavorites(productId))
      }
      style={styles.FavIcon}
    >
      <FontAwesome
        name={inFavorites ? "heart" : "heart-o"}
        size={30}
        color={inFavorites ? "#e52325" : "black"}
      />
    </TouchableHighlight>
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
