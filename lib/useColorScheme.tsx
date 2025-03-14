import { useColorScheme as useNativewindColorScheme } from "nativewind";
import { useEffect, useState } from "react";

type ThemeColors = {
  background?: string;
  primary?: string;
  foreground?: string;
};

export function useColorScheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useNativewindColorScheme();
  const [themeColors, setThemeColors] = useState<ThemeColors>({});
  useEffect(() => {
    const colors = {
      // background: getComputedStyle(document.documentElement).getPropertyValue(
      //   "--background"
      // ),
      // primary: getComputedStyle(document.documentElement).getPropertyValue(
      //   "--primary"
      // ),
      // foreground: getComputedStyle(document.documentElement).getPropertyValue(
      //   "--foreground"
      // ),
    };
    setThemeColors(colors);
  }, [colorScheme]);

  return {
    colorScheme: colorScheme ?? "dark",
    isDarkColorScheme: colorScheme === "dark",
    setColorScheme,
    toggleColorScheme,
    themeColors,
  };
}
