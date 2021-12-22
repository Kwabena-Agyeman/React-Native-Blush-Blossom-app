/** @format */

import { DefaultTheme } from "@react-navigation/native";
import colors from "../theme/colors";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.brand.primary,
    secondary: colors.brand.secondary,
    background: colors.bg.primary,
  },
};

export default navTheme;
