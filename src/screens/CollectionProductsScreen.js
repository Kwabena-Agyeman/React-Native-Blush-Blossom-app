import React, { useCallback } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  FlatList,
  LogBox,
} from "react-native";

import { useRoute } from "@react-navigation/native";

import Constants from "expo-constants";
import Routes from "../navigation/Routes";

import CollectionProductHeader from "../components/CollectionProductHeader";
import CollectionProductCard from "../components/CollectionProductCard";
import AndroidBackButton from "../components/AndroidBackButton";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const CollectionProductsScreen = () => {
  const route = useRoute();
  const { title, products } = route.params;

  const android = Platform.OS === "android";

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
        {android && <AndroidBackButton route={Routes.CollectionScreen} />}
        <FlatList
          data={products}
          keyExtractor={ProductKeyExtractor}
          ListHeaderComponent={<CollectionProductHeader title={title} />}
          horizontal={false}
          showsVerticalScrollIndicator
          scrollEnabled
          initialNumToRender={5}
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
