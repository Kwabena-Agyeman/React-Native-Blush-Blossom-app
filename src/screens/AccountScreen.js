import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
} from "react-native";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import Constants from "expo-constants";
import spacing from "../theme/spacing";
import fonts from "../theme/fonts";
import colors from "../theme/colors";

const SignUserOut = () => {
  signOut(auth);
};

const AccountScreen = () => {
  const user = useSelector((state) => state.shop.user);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: spacing.xxl,
        }}
      >
        <Text
          style={{
            fontSize: fonts.fontSizes.h3,
            fontFamily: fonts.fonts.heading,
          }}
        >
          Account
        </Text>
      </View>
      <View style={styles.TextContainer}>
        <Feather
          name="user"
          size={24}
          color={colors.ui.secondary}
          style={styles.icon}
        />
        <Text> {user.email}</Text>
      </View>
      <TouchableHighlight
        title="Register"
        onPress={() => SignUserOut()}
        style={styles.SubmitButton}
      >
        <Text style={styles.ButtonText}>Sign out</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  ButtonText: {
    color: colors.text.inverse,
    fontSize: fonts.fontSizes.button,
  },
  SubmitButton: {
    alignItems: "center",
    backgroundColor: colors.brand.primary,
    borderRadius: spacing.sm,
    justifyContent: "center",
    marginTop: spacing.xxl,
    padding: spacing.md3,
  },
  TextContainer: {
    alignItems: "center",
    backgroundColor: colors.bg.secondary,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: spacing.md3,
  },
  container: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  icon: {
    marginHorizontal: spacing.md,
  },
});
