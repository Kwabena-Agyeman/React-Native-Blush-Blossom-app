/** @format */

import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { client } from "../shopify";
import FeatureProductCard from "./FeatureProductCard";

const FeatureImageGallery = () => {
  const [products, setProducts] = useState([]);

  const fetchFeaturedCollection = async () => {
    let data = await client.collection.fetchByHandle("frontPage");
    console.log({ koby: data.products[0] });
    setProducts(data.products);
  };

  const FlatListRenderItem = useCallback(
    ({ item: product }) => <FeatureProductCard product={product} />,
    []
  );
  const FlatListKeyExtractor = useCallback((item) => item.id, []);

  useEffect(() => {
    fetchFeaturedCollection();

    return () => fetchFeaturedCollection();
  }, []);
  return (
    <View style={styles.galleryContainer}>
      <FlatList
        data={products}
        keyExtractor={FlatListKeyExtractor}
        horizontal
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        initialNumToRender={2}
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

export default React.memo(FeatureImageGallery);

const styles = StyleSheet.create({
  galleryContainer: {
    zIndex: 1,
  },
});
