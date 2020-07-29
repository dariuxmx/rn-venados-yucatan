import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: "#fff",
    background: "#fff",
    placeholderText: "#7d7f86",
    inputBackground: "#e9ecf2",
    secondaryText: "#666",
    accent: "#0a84ff",
    accentBackground: "#fbfaf5",
    uiAccent: "green",
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: "#fff",
    background: "#000",
    placeholderText: "#666",
    inputBackground: "#1e2022",
    secondaryText: "#999",
    secondary: "#1a1d1e",
    accent: "#0a84ff",
    accentBackground: "rgba(10, 132, 255, 0.1)",
    uiAccent: "#68707e",
  },
};
