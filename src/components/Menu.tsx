import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import BigTitle from '../common/BigTitle';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Statistics from "../screens/Statistics";
import Players from "../screens/Players";

// const Drawer = createDrawerNavigator();
const StackNavigator =  createStackNavigator();

const Menu = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Home"
        component={Dashboard}
      />
      <StackNavigator.Screen
        name="Statistics"
        component={Statistics}
      />
      <StackNavigator.Screen
        name="Players"
        component={Players}
      />
    </StackNavigator.Navigator>
  );
}


export default Menu;