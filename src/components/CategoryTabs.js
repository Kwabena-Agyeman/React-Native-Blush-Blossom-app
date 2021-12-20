/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native";
import spacing from "../theme/spacing";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

const categories = [
  "All",
  "Summer",
  "Women",
  "Eyewear",
  "Kids",
  "Men",
  "Floral",
  "Winter",
  "Teens",
];

const CategoryTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={categories}
        keyExtractor={(index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabs,
                selectedCategory === item
                  ? { backgroundColor: colors.ui.primary, borderWidth: 0 }
                  : null,
              ]}
              onPress={() => {
                setSelectedCategory(item);
              }}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedCategory === item ? { color: colors.ui.quaternary } : null,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  tabContainer: {
    marginVertical: spacing.md2,
    paddingHorizontal: spacing.md2,
    paddingVertical: spacing.sm,
  },
  tabs: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: spacing.md2,
    marginHorizontal: spacing.md,
  },
  tabText: {
    color: colors.ui.primary,
    paddingHorizontal: spacing.lg2,
    paddingVertical: spacing.md2,
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.button,
  },
});
