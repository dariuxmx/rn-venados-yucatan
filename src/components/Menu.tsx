import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import BigTitle from '../common/BigTitle';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Statistics from "../screens/Statistics";
import Players from "../screens/Players";

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
            <Button icon="camera" onPress={() => navigation.toggleDrawer()}/>
          }
        }}
      />
      <StackNavigator.Screen
        name="Statistics"
        component={Statistics}
        options={{
          headerLeft: () => {
            <Button icon="camera" onPress={() => navigation.toggleDrawer()}/>
          }
        }}
      />
      <StackNavigator.Screen
        name="Players"
        component={Players}
        options={{
          headerLeft: () => {
            <Button icon="camera" onPress={() => navigation.toggleDrawer()}/>
          }
        }}
      />
    </StackNavigator.Navigator>
  );
}


export default Menu;