/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { Formik } from "formik";
import * as Yup from "yup";
import spacing from "../theme/spacing";

// import AppScreen from "../components/AppScreen";
// import AppTextInput from "../components/AppTextInput";
// import AppButton from "../components/AppButton";
// import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(10).min(4).label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {}}
      >
        {({ handleChange, handleSubmit, touched, errors, setFieldTouched }) => {
          return (
            <>
              <TextInput
                icon="account"
                placeholder="Name"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
                style={styles.TextInput}
              />
              {/* {touched.email && <ErrorMessage error={errors.name} />} */}

              <TextInput
                icon="email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              {/* {touched.email && <ErrorMessage error={errors.email} />} */}

              <TextInput
                icon="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              {/* {touched.email && <ErrorMessage error={errors.password} />} */}

              <Button title="Register" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  TextInput: {
    padding: spacing.lg3,
  },
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : null,
  },
});
