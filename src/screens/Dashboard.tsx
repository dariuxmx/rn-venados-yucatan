import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react";
import {
  useTheme
} from "@react-navigation/native";
import { ScrollView, RefreshControl } from "react-native";
import styled from "styled-components/native";
import { STATES } from "../constants";
import useAppState from "../hooks/useAppState";
import HeaderTitleLogo from "../common/HeaderTitleLogo";
import SegmentedControl from '@react-native-community/segmented-control';
import GamesStore from '../stores/Games';
import MatchGamePreview from "../components/MatchGamePreview";
import ErrorCard from "../common/ErrorCard";
import Loader from "../common/Loader";

const Dashboard = observer(() => {
  const gameStore = useContext(GamesStore);
  const { colors } = useTheme();

  const loadData = () => {
    gameStore.loadArticles();
  };

  useEffect(() => {
    loadData();
  }, []);

  useAppState({
    onForeground: () => loadData(),
  });

  const renderScreenContent = () => {
    switch (gameStore.state) {
      case STATES.IDLE:
      case STATES.LOADING:
        return <Loader />;
      case STATES.ERROR:
        return (
          <ErrorCard
            message="Something went wrong while retrieving data"
            onRetry={() => loadData()}
          />
        );
      default:
        return (
          <>
            {gameStore.news.map((match, index) => {
              return (
                <MatchGamePreview key={index}
                  matchGame={match}
                />
              );
            })}
          </>
        );
    }
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
        refreshControl={
          <RefreshControl
            refreshing={gameStore.state === STATES.LOADING}
            onRefresh={loadData}
            tintColor={colors.uiAccent}
          />
        }
      >
        <Container>
          { renderScreenContent() }
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