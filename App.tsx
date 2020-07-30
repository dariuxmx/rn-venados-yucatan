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
import Menu from "./src/components/Menu";
import Dashboard from './src/screens/Dashboard';
import Statistics from "./src/screens/Statistics";
import "mobx-react-lite/batchingForReactNative";
import HeaderTitleLogo from "./src/common/HeaderTitleLogo";

function PlayersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Players Screen</Text>
    </View>
  );
}

const App = observer(() => {
    
  // const Drawer = createDrawerNavigator();
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
          <Menu option1={Dashboard} option2={Statistics} option3={PlayersScreen} />
          {/* <Drawer.Navigator initialRouteName="Home"
          drawerType= 'back'
          drawerStyle={{ width: '60%' }}
          overlayColor="rgba(15, 126, 0, 0.9)"
          drawerContentOptions={{
            drawerIcon: { focused: true, color: 'red', size: 30 },
            activeTintColor: '#f1c100',
            itemStyle: { marginVertical: 5 },
          }}
          >
            <Drawer.Screen name="Home" component={Dashboard} />
            <Drawer.Screen name="Statistics" component={Statistics} />
            <Drawer.Screen name="Players" component={PlayersScreen} />
          </Drawer.Navigator> */}
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
});

export default App;
