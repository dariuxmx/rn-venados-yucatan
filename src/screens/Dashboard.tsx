import React, { useEffect, useContext, useState } from "react";
import { observer } from "mobx-react";
import { ScrollView, RefreshControl } from "react-native";
import styled from "styled-components/native";
import { STATES } from "../constants";
import useAppState from "../hooks/useAppState";
import HeaderTitleLogo from "../common/HeaderTitleLogo";
import SegmentedControl from '@react-native-community/segmented-control';
import GamesStore from '../stores/Games';
import MatchGamePreview from "../components/MatchGamePreview";

const Dashboard = observer(() => {
  const gameStore = useContext(GamesStore);

  const loadData = () => {
    gameStore.loadArticles();
  };

  useEffect(() => {
    loadData();
  }, []);

  useAppState({
    onForeground: () => loadData(),
  });

  const fontStyles = {
    fontSize: 30,
  };

  return (
    <Wrapper>
      <HeaderTitleLogo />
      <SegmentedControl
          values={['COPA MX', 'ASCENSO MX']}
          enabled={true}
          tintColor='yellow'
          backgroundColor='green'
          activeFontStyle={{
            color: 'green',
          }}
          style={{height: 40, width: '92%'}}
          fontStyle={{
            fontSize: 19,
          }}
          selectedIndex={0}
        />
      <ScrollView
        scrollEnabled={true}
        style={{ width: "100%" }}
        contentContainerStyle={{ flex: 0 }}
      >
        <Container>
          {gameStore.news.map((match, index) => {
            return (
              <MatchGamePreview key={index}
                matchGame={match}
              />
            );
          })}
          
          {/* { renderScreenContent() } */}
        </Container>
      </ScrollView>
    </Wrapper>
  );
})

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
  background: ${({ theme }) => theme.background};
`;