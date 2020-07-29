import React, { useEffect, useContext } from "react";
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import {
  useTheme,
  useNavigation
} from "@react-navigation/native";
import { observer } from "mobx-react";
import { ScrollView, RefreshControl } from "react-native";
// import { STATES } from "../constants";
import Loader from "../common/Loader";
import ErrorCard from "../common/ErrorCard";
import HeaderTitleLogo from "../common/HeaderTitleLogo";

const Dashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <Wrapper>
      <BrandLogoContainer>
        <Image source={ require('../../assets/logo-venados.png')}/>
      </BrandLogoContainer>
      <ScrollView
        scrollEnabled={true}
        style={{ width: "100%" }}
        contentContainerStyle={{ flex: 0 }}
      >
        <Container>
          {/* { renderScreenContent() } */}
        </Container>
      </ScrollView>
      {/* <Button
        title="Go to Statistics"
        onPress={() => navigation.navigate('Statistics')}
      /> */}
    </Wrapper>
  );
}

export default Dashboard;

const Wrapper = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`;

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  padding: 2%;
`;

const BrandLogoContainer = styled.View`
  width: 94%;
  height: auto;
  margin: 10px;
  padding: 15px 0 15px 0;
  align-items: center;
`;

const Image = styled.ImageBackground`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;