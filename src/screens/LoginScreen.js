/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  Platform,
  View,
  TouchableHighlight,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import spacing from "../theme/spacing";
import colors from "../theme/colors";
import fonts from "../theme/fonts";
import Routes from "../navigation/Routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: fonts.fontSizes.title,
          fontFamily: fonts.fonts.heading,
        }}
      >
        Login
      </Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            // console.log(values);

            const user = await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            // console.log(user);
          } catch (error) {
            const FBerrorCode = error.code;
            const FBerrorMessage = error.message;
            // console.log("ErrorCode", FBerrorCode);
            // console.log("ErrorMessage", FBerrorMessage);
            setErrorMessage("Login credentials are incorrect");
          }
        }}
      >
        {({ handleChange, handleSubmit, touched, errors, setFieldTouched }) => {
          return (
            <>
              <View style={styles.TextInputContainer}>
                <Feather name="mail" size={24} color={colors.ui.secondary} />

                <TextInput
                  placeholder="Email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                  style={styles.TextInput}
                />
              </View>
              {touched.email && (
                <Text style={styles.ErrorMessage}>{errors.email}</Text>
              )}

              <View style={styles.TextInputContainer}>
                <Feather name="lock" size={24} color={colors.ui.secondary} />
                <TextInput
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  style={styles.TextInput}
                />
              </View>
              {touched.password && (
                <Text style={styles.ErrorMessage}>{errors.password}</Text>
              )}

              <Text style={styles.ErrorMessage}>{errorMessage}</Text>

              <TouchableHighlight
                title="Register"
                onPress={handleSubmit}
                style={styles.SubmitButton}
              >
                <Text style={styles.ButtonText}>Login</Text>
              </TouchableHighlight>
              <TouchableHighlight
                title="Register"
                onPress={() => navigation.navigate(Routes.ResetPasswordScreen)}
                style={styles.ResetEmailButton}
              >
                <Text style={styles.ResetEmailText}>Forgot your password?</Text>
              </TouchableHighlight>
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  ButtonText: {
    color: colors.text.inverse,
  },
  ErrorMessage: {
    color: colors.text.error,
    margin: spacing.sm,
  },
  ResetEmailButton: {
    // backgroundColor: colors.brand.primary,
    borderRadius: spacing.sm,
    marginTop: spacing.lg3,
    padding: spacing.lg3,
  },
  ResetEmailText: {
    color: colors.brand.primary,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  SubmitButton: {
    backgroundColor: colors.brand.primary,
    borderRadius: spacing.sm,
    marginTop: spacing.xxl,
    padding: spacing.md3,
  },
  TextInput: {
    // backgroundColor: "red",
    borderBottomWidth: 1,
    borderColor: colors.ui.secondary,
    flex: 1,
    marginLeft: spacing.md3,
    padding: spacing.md3,
  },
  TextInputContainer: {
    // backgroundColor: "red",
    alignItems: "center",
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: spacing.lg3,
  },
  container: {
    // alignItems: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: spacing.md,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : null,
  },
});
