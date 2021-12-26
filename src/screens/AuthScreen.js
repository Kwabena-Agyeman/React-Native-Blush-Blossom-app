import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Routes from "../navigation/Routes";
import colors from "../theme/colors";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";

const AuthScreen = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  return (
    <ImageBackground
      source={require("../../assets/v934-nunny-wallpaper-09-x.jpg")}
      blurRadius={100}
      style={styles.container}
    >
      <View style={styles.ImageContainer}>
        <Image
          source={require("../../assets/BBLogo.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate(Routes.LoginScreen)}
        >
          <Text style={styles.ButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate(Routes.RegisterScreen)}
        >
          <Text style={styles.ButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  Button: {
    alignItems: "center",
    backgroundColor: colors.brand.primary,
    borderRadius: spacing.md,
    justifyContent: "center",
    margin: spacing.md,
    padding: spacing.md3,
    width: 200,
  },
  ButtonText: {
    color: colors.bg.primary,
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.button,
  },
  ImageContainer: {
    alignItems: "center",
    height: 200,
    justifyContent: "center",
    width: 200,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    padding: spacing.xxxl,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
