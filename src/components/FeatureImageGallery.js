/** @format */

import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { client } from "../shopify";
import FeatureProductCard from "./FeatureProductCard";

const FeatureImageGallery = () => {
  const [products, setProducts] = useState([]);

  const fetchFeaturedCollection = async () => {
    let data = await client.collection.fetchByHandle("frontPage");
    setProducts(data.products);
  };

  const FlatListRenderItem = useCallback(
    ({ item: product }) => <FeatureProductCard product={product} />,
    []
  );
  const FlatListKeyExtractor = useCallback((item) => item.id, []);

  useEffect(() => {
    fetchFeaturedCollection();
  }, []);
  return (
    <View style={styles.galleryContainer}>
      <FlatList
        data={products}
        keyExtractor={FlatListKeyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={3}
        getItemLayout={(data, index) => {
          return {
            length: 140,
            offset: 140 * index,
            index,
          };
        }}
        initialScrollIndex={1}
        renderItem={FlatListRenderItem}
      />
    </View>
  );
};

export default FeatureImageGallery;

const styles = StyleSheet.create({
  galleryContainer: {},
});