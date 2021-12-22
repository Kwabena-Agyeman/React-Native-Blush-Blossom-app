/** @format */

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
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
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/BBLogo.png")}
              style={styles.logo}
            />
          </View>
          <Text style={styles.heading}>Find your style</Text>

          <CategoryTabs />
          <View style={styles.subHeadingContainer}>
            <Text style={[styles.heading, { fontSize: 34 }]}>Most popular</Text>
          </View>
          <FeatureImageGallery />
          <View style={styles.collectionHeadingContainer}>
            <Text style={[styles.heading, { fontSize: 34 }]}>Collections</Text>
            <Text
              style={[
                styles.heading,
                { fontSize: 16, color: colors.brand.primary },
              ]}
            >
              See all
            </Text>
          </View>
          <Collections />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  collectionHeadingContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.md3,
  },
  container: {
    flex: 1,
  },
  heading: {
    fontFamily: fonts.fonts.heading,
    fontSize: fonts.fontSizes.h3,
    fontWeight: "normal",
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  logo: {
    height: 60,
    resizeMode: "cover",
    width: 100,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.md,
  },
  scrollView: {
    flex: 1,
    height: "100%",
  },
  subHeading: {
    fontFamily: fonts.fonts.body,
  },
  subHeadingContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});