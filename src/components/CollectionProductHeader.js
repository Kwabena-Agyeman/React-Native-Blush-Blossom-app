import React from "react";
import { Text, View } from "react-native";
import fonts from "../theme/fonts";
import spacing from "../theme/spacing";

const CollectionProductHeader = ({ title }) => {
  return (
    <View
      style={{
        padding: spacing.lg,
      }}
    >
      <Text
        style={{
          fontSize: fonts.fontSizes.h3,
          fontFamily: fonts.fonts.heading,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default React.memo(CollectionProductHeader);
