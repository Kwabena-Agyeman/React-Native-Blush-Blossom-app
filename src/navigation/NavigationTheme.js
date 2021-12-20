/** @format */

import { DefaultTheme } from "@react-navigation/native";
import colors from "../theme/colors";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.brand.primary,
    background: colors.brand.secondary,
  },
};

export default navTheme;
