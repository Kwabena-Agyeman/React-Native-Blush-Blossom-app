/** @format */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

import { client } from "../shopify";
import Routes from "../navigation/Routes";

import colors from "../theme/colors";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";

const CollectionScreen = () => {
  const [collections, setCollections] = useState([]);

  const navigation = useNavigation();

  const fetchAllCollections = async () => {
    let data = await client.collection.fetchAllWithProducts();
    setCollections(data);
  };

  useEffect(() => fetchAllCollections());

  return (
    <ImageBackground
      source={require("../../assets/v934-nunny-wallpaper-09-x.jpg")}
      style={styles.backgroundImage}
      blurRadius={100}
    >
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <View
            style={{
              padding: spacing.lg,
            }}
          >
            <Text
              style={{
                fontSize: fonts.fontSizes.h3,
                fontFamily: fonts.fonts.heading,
              }}
            >
              Collections
            </Text>
          </View>
          <View style={styles.collectionContainer}>
            {collections.map((collection) => (
              <TouchableOpacity
                key={collection.id}
                style={styles.collectionButton}
                onPress={() =>
                  navigation.navigate(Routes.CollectionProductsScreen, {
                    title: collection.title,
                    products: collection.products,
                  })
                }
              >
                <View style={styles.textOverlay}>
                  <Text style={styles.text}>{collection.title}</Text>
                </View>
                <Image
                  source={{ uri: collection.image.src }}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default CollectionScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  collectionButton: {
    borderRadius: 20,
    height: 200,
    margin: spacing.md,
    overflow: "hidden",
    width: "100%",
  },
  collectionContainer: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: spacing.md,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  image: {
    height: 200,
    width: "100%",
  },
  scrollView: {
    flex: 1,
    height: "100%",
  },
  text: {
    color: colors.text.inverse,
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.h5,
    textAlign: "center",
  },

  textOverlay: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100%",
    justifyContent: "center",
    left: "0%",
    position: "absolute",
    top: "0%",
    width: "100%",
    zIndex: 999,
  },
});
