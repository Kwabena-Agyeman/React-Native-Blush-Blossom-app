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
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setCheckout, toggleModal } from "../redux/slices/shopSlice";
import { AntDesign } from "@expo/vector-icons";

import { client } from "../shopify";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";
import CategoryTabs from "../components/CategoryTabs";
import FeatureImageGallery from "../components/FeatureImageGallery";
import Collections from "../components/Collections";
import colors from "../theme/colors";
import CartIcon from "../components/CartIcon";
import { Muli_500Medium } from "@expo-google-fonts/muli";

const HomeScreen = () => {
  const modalVisible = useSelector((state) => state.shop.modalVisible);
  const dispatch = useDispatch();

  const createChekout = useCallback(async () => {
    let checkout = await client.checkout.create();
    // console.log(checkout);
    dispatch(setCheckout({ id: checkout.id, lineItems: checkout.lineItems }));
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = () => createChekout();

    return () => unsubscribe();
  }, [createChekout]);

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
        presentationStyle="pageSheet"
        visible={modalVisible}
        statusBarTranslucent={true}
      >
        <SafeAreaView>
          <TouchableHighlight
            style={styles.closeButton}
            onPress={() => dispatch(toggleModal(!modalVisible))}
          >
            <AntDesign name="close" size={34} color="black" />
          </TouchableHighlight>
        </SafeAreaView>
      </Modal>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  closeButton: {
    position: "absolute",
    right: 30,
    top: 50,
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
