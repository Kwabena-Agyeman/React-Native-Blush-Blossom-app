import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import spacing from "../theme/spacing";

const AndroidBackButton = ({ route }) => {
  // console.log("ROUTE", route);
  const navigation = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <Ionicons
        name="arrow-back"
        size={spacing.xxl}
        color="black"
        onPress={
          route ? () => navigation.navigate(route) : () => navigation.goBack()
        }
        // onPress={() => navigation.navigate(route)}
      />
    </View>
  );
};

export default AndroidBackButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: spacing.lg,
  },
});
