import { StatusBar } from "react-native";
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import {
  useTheme,
  useNavigation
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { darkTheme, lightTheme } from "./src/theme";
import { Themes } from "./src/types";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import AppState from "./src/stores/AppState";
import { observer } from "mobx-react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from "./src/components/Menu";
import DrawerOptions from "./src/components/DrawerOptions";
// import Dashboard from './src/screens/Dashboard';
// import Statistics from "./src/screens/Statistics";
import Players from "./src/screens/Players";
import "mobx-react-lite/batchingForReactNative";

const App = observer(() => {
    
  const Drawer = createDrawerNavigator();
  const scheme = useColorScheme();
  const appStateStore = useContext(AppState);

  let theme;
  let statusBarStyle;
  if (appStateStore.theme === Themes.automatic) {
    if (scheme === "dark") {
      theme = darkTheme;
      statusBarStyle = "light-content";
    } else {
      theme = lightTheme;
      statusBarStyle = "dark-content";
    }
  } else if (appStateStore.theme === Themes.light) {
    theme = lightTheme;
    statusBarStyle = "dark-content";
  } else if (appStateStore.theme === Themes.dark) {
    theme = darkTheme;
    statusBarStyle = "light-content";
  }



  return (
    <AppearanceProvider>
      <ThemeProvider theme={theme.colors}>
        <NavigationContainer theme={theme}>
          <StatusBar barStyle={statusBarStyle} />
          <Drawer.Navigator drawerContent={DrawerOptions} >
            <Drawer.Screen name="Home" component={ Menu } />
            {/* <Drawer.Screen name="Statistics" component={Statistics} />
            <Drawer.Screen name="Players" component={Players} /> */}
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
});

export default App;
