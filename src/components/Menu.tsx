import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Statistics from "../screens/Statistics";
import Players from "../screens/Players";
import { IconButton, Colors } from 'react-native-paper';


// const Drawer = createDrawerNavigator();
const StackNavigator =  createStackNavigator();

const Menu = ({ navigation }) => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerLeft: () => {
            return <IconButton icon="menu" onPress={() => navigation.openDrawer()}/>
          }
        }}
      />
      <StackNavigator.Screen
        name="Statistics"
        component={Statistics}
        options={{
          headerLeft: () => {
            return <IconButton icon="menu" onPress={() => navigation.openDrawer()}/>
          }
        }}
      />
      <StackNavigator.Screen
        name="Players"
        component={Players}
        options={{
          headerLeft: () => {
            return <IconButton icon="menu" onPress={() => navigation.openDrawer()}/>
          }
        }}
      />
    </StackNavigator.Navigator>
  );
}

export default Menu;