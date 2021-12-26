/** @format */

import React from "react";
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
import { Formik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import spacing from "../theme/spacing";
import colors from "../theme/colors";

// import AppScreen from "../components/AppScreen";
// import AppTextInput from "../components/AppTextInput";
// import AppButton from "../components/AppButton";
// import Text from "../components/Text";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(10).min(4).label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm Password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
            console.log(values);

            createUserWithEmailAndPassword(auth, values.email, values.password);
          } catch (error) {}
        }}
      >
        {({ handleChange, handleSubmit, touched, errors, setFieldTouched }) => {
          return (
            <>
              <View style={styles.TextInputContainer}>
                <Feather name="user" size={24} color={colors.ui.secondary} />
                <TextInput
                  placeholder="Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={() => setFieldTouched("name")}
                  onChangeText={handleChange("name")}
                  style={styles.TextInput}
                />
              </View>
              {touched.name && (
                <Text style={styles.ErrorMessage}>{errors.name}</Text>
              )}
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

              <View style={styles.TextInputContainer}>
                <Feather name="lock" size={24} color={colors.ui.secondary} />
                <TextInput
                  icon="lock"
                  placeholder="Re-enter Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  onBlur={() => setFieldTouched("confirmPassword")}
                  onChangeText={handleChange("confirmPassword")}
                  style={styles.TextInput}
                />
              </View>
              {touched.confirmPassword && (
                <Text style={styles.ErrorMessage}>
                  {errors.confirmPassword}
                </Text>
              )}

              <TouchableHighlight
                title="Register"
                onPress={handleSubmit}
                style={styles.SubmitButton}
              >
                <Text style={styles.ButtonText}>Register</Text>
              </TouchableHighlight>
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  ButtonText: {
    color: colors.text.inverse,
  },
  ErrorMessage: {
    color: colors.text.error,
    margin: spacing.sm,
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
