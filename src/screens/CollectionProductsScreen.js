import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import Constants from "expo-constants";

const CollectionProductsScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/v934-nunny-wallpaper-09-x.jpg")}
      style={styles.backgroundImage}
      blurRadius={100}
    >
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <Text>Hello</Text>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default CollectionProductsScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  scrollView: {
    flex: 1,
    height: "100%",
  },
});
