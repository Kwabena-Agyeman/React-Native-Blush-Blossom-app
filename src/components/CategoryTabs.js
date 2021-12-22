/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
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
                selectedCategory === item ? styles.selectedCategory : null,
              ]}
              onPress={() => {
                setSelectedCategory(item);
              }}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedCategory === item
                    ? { color: colors.ui.quaternary }
                    : null,
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
  selectedCategory: {
    backgroundColor: colors.ui.primary,
    borderWidth: 0,
  },
  tabContainer: {
    marginVertical: spacing.md2,
    paddingHorizontal: spacing.md2,
    paddingVertical: spacing.sm,
  },
  tabText: {
    color: colors.ui.primary,
    fontFamily: fonts.fonts.body,
    fontSize: fonts.fontSizes.button,
    paddingHorizontal: spacing.lg2,
    paddingVertical: spacing.md2,
  },
  tabs: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: spacing.md2,
    borderWidth: 1,
    justifyContent: "center",
    marginHorizontal: spacing.md,
  },
});
