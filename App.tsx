import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './src/screens/Dashboard';

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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Dashboard} 
          options={{
            title: "Venados F.C. Yucatán",
            headerTintColor: "green",
          }}
        />
        <Drawer.Screen name="Statistics" component={StatisticsScreen} />
        <Drawer.Screen name="Players" component={PlayersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
