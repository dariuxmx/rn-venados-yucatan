import React, { Component } from 'react';
import styled from "styled-components/native";
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import BigTitle from '../common/BigTitle';
import { Avatar, Title, Caption, Drawer, Paragraph, Text, TouchableRipple } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Statistics from "../screens/Statistics";
import Players from "../screens/Players";

// const Drawer = createDrawerNavigator();

const DrawerOptions = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <AvatarContainer>
        <Avatar.Image style={{marginBottom: 15, backgroundColor:'white'}} size={55} source={{ uri: 'https://venados.dacodes.mx/img/venados.png' }} />
        <Caption style={{ textAlign: "center" }}>Carlos Vela {"\n"} cvela@venadosfc.mx</Caption>
      </AvatarContainer>
      <Drawer.Section>
        <DrawerItem label="Home" onPress={() => {navigation.navigate('Home')}} />
        <DrawerItem label="Statistics" onPress={() => {navigation.navigate('Statistics')}} />
        <DrawerItem label="Players" onPress={() => {navigation.navigate('Players')}} />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

export default DrawerOptions;

const AvatarContainer = styled.View`
  align-items: center;
  overflow: hidden;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.25);
  padding: 20px 0px;
`;

const OptionContainer = styled.View`
  flex-direction: row;
  background: ${({ theme }) => theme.secondary};
  padding: 5px 0px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  margin-top:17px;
`;

const TitleOption = styled.Text`
  margin: 15px;
  color: ${({ theme }) => theme.uiAccent};
  font-size: 17px;
  font-weight: normal;
  text-align: center;
`;

