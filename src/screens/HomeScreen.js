/** @format */

import React, { useEffect, useCallback } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setCheckout, setLineItems } from "../redux/slices/shopSlice";
import { getDataAsyncStorage } from "../asyncStorage";

import { client } from "../shopify";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import CategoryTabs from "../components/CategoryTabs";
import FeatureImageGallery from "../components/FeatureImageGallery";
import Collections from "../components/Collections";
import colors from "../theme/colors";
import CartIcon from "../components/CartIcon";
import Checkout from "../components/Checkout";

const HomeScreen = () => {
  const modalVisible = useSelector((state) => state.shop.modalVisible);
  const dispatch = useDispatch();

  const createChekout = useCallback(async () => {
    let checkout = await client.checkout.create();
    dispatch(
      setCheckout({
        id: checkout.id,
        webUrl: checkout.webUrl,
      })
    );
  }, [dispatch]);

  const retriveCartFromAsyncStore = useCallback(async () => {
    let items = await getDataAsyncStorage();
    dispatch(setLineItems(items));

    // console.log("items", items);
  }, [dispatch]);

  useEffect(() => {
    createChekout();

    retriveCartFromAsyncStore();
    return createChekout;
  }, [createChekout, retriveCartFromAsyncStore]);

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
            <CartIcon />
          </View>
          <Text style={styles.heading}>Find your style</Text>

          <CategoryTabs />
          <View style={styles.subHeadingContainer}>
            <Text style={styles.subHeading}>Most popular</Text>
          </View>
          <FeatureImageGallery />
          <View style={styles.collectionHeadingContainer}>
            <Text style={styles.subHeading}>Collections</Text>
          </View>
          <Collections />
        </SafeAreaView>
      </ScrollView>
      <Modal
        animationType="slide"
        presentationStyle="fullScreen"
        visible={modalVisible}
        statusBarTranslucent={true}
      >
        <Checkout />
      </Modal>
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
    color: colors.brand.primary,
    fontFamily: fonts.fonts.heading,
    fontSize: fonts.fontSizes.h5,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  subHeadingContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
