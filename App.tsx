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
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './src/screens/Dashboard';
import "mobx-react-lite/batchingForReactNative";

function StatisticsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statistics Screen</Text>
    </View>
  );
}

function PlayersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Players Screen</Text>
    </View>
  );
}

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
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Dashboard} />
            <Drawer.Screen name="Statistics" component={StatisticsScreen} />
            <Drawer.Screen name="Players" component={PlayersScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
});

export default App;
