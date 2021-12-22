import React, { useCallback } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";

import { useRoute } from "@react-navigation/native";

import Constants from "expo-constants";

import CollectionProductHeader from "../components/CollectionProductHeader";
import CollectionProductCard from "../components/CollectionProductCard";

const CollectionProductsScreen = () => {
  const route = useRoute();
  const { title, products } = route.params;

  const ProductKeyExtractor = useCallback((product) => {
    return product.id;
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/v934-nunny-wallpaper-09-x.jpg")}
      style={styles.backgroundImage}
      blurRadius={100}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={ProductKeyExtractor}
          ListHeaderComponent={<CollectionProductHeader title={title} />}
          horizontal={false}
          showsVerticalScrollIndicator
          scrollEnabled
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({ item: product }) => {
            return <CollectionProductCard product={product} />;
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(CollectionProductsScreen);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  columnWrapperStyle: {
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
