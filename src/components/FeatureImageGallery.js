/** @format */

import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

import { client } from "../shopify";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import ProductCardImage from "./ProductCardImage";
import { FontAwesome } from "@expo/vector-icons";

const FeatureImageGallery = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchFeaturedCollection = async () => {
    let data = await client.collection.fetchByHandle("frontPage");
    setProducts(data.products);
  };

  const toggleFavorite = (id, product) => {
    const found = favorites.some((favoriteId) => favoriteId === id);
    console.log(found);

    if (!found) {
      setFavorites([...favorites, id]);
      return;
    }

    let newFavorites = favorites.filter((favorite) => favorite !== id);
    setFavorites(newFavorites);
  };

  useEffect(() => {
    fetchFeaturedCollection();
  }, []);
  return (
    <View style={styles.galleryContainer}>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => {
          return {
            length: 140,
            offset: 140 * index,
            index,
          };
        }}
        initialScrollIndex={1}
        renderItem={({ item: product }) => {
          return (
            <>
              {!favorites.some((favoriteId) => favoriteId === product.id) ? (
                <View>
                  <TouchableOpacity
                    onPress={() => toggleFavorite(product.id, product)}
                    style={{
                      position: "absolute",
                      zIndex: 999,
                      top: 20,
                      right: 30,
                    }}
                  >
                    <FontAwesome name='heart-o' size={24} color='black' />
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => toggleFavorite(product.id, product)}
                    style={{
                      position: "absolute",
                      zIndex: 999,
                      top: 20,
                      right: 30,
                    }}
                  >
                    <FontAwesome name='heart' size={24} color='#fb3958' />
                  </TouchableOpacity>
                </View>
              )}

              <TouchableOpacity
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: spacing.sm,
                }}
              >
                <ProductCardImage image={product.images[0].src} />
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 16,
                    fontFamily: fonts.fonts.body,
                    width: "60%",
                    textAlign: "center",
                  }}
                >
                  {product.title}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: fonts.fonts.title,
                  }}
                >
                  $ {product.variants[0].price}
                </Text>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

export default FeatureImageGallery;

const styles = StyleSheet.create({
  galleryContainer: {},
});
