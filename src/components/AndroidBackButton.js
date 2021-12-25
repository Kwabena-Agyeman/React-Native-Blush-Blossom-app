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
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    elevation: 24,
    height: 40,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    width: 40,
  },
});
