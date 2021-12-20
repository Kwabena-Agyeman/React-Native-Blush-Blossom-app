/** @format */

import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import colors from "../theme/colors";
import { fetchAllProducts } from "../shopify";
import CategoryTabs from "../components/CategoryTabs";
import ProductCardImage from "../components/ProductCardImage";
import FeatureImageGallery from "../components/FeatureImageGallery";
import Collections from "../components/Collections";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/v934-nunny-wallpaper-09-x.jpg")}
      style={styles.backgroundImage}
      blurRadius={100}
    >
      <ScrollView
        style={{
          flex: 1,
          height: "100%",
        }}
      >
        <SafeAreaView style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: spacing.md,
            }}
          >
            <Image
              source={require("../../assets/BBLogo.png")}
              style={{
                width: 100,
                height: 60,
                resizeMode: "cover",
              }}
            />
          </View>
          <Text style={styles.heading}>Find your style</Text>

          <CategoryTabs />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[styles.heading, { fontSize: 34 }]}>Most popular</Text>
          </View>
          <FeatureImageGallery />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: spacing.md3,
            }}
          >
            <Text style={[styles.heading, { fontSize: 34 }]}>Collections</Text>
            <Text style={[styles.heading, { fontSize: 16, color: colors.brand.primary }]}>See all</Text>
          </View>
          <Collections />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: spacing.sm,
  },
  heading: {
    fontSize: fonts.fontSizes.h3,
    fontFamily: fonts.fonts.heading,
    fontWeight: "normal",
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    // textTransform: "capitalize",
  },
  subHeading: {
    fontFamily: fonts.fonts.body,
  },
  backgroundImage: {
    flex: 1,
  },
});
