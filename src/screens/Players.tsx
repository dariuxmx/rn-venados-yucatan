import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react";
import {
  useTheme
} from "@react-navigation/native";
import { ScrollView, RefreshControl, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { STATES } from "../constants";
import useAppState from "../hooks/useAppState";
import PlayersStore from '../stores/Players';
import PlayersPreview from "../components/PlayersPreview";
import ErrorCard from "../common/ErrorCard";
import Loader from "../common/Loader";
import BigTitle from "../common/BigTitle";

const Players = observer(() => {
  const playersStore = useContext(PlayersStore);
  const { colors } = useTheme();
  
  const loadData = () => {
    playersStore.loadArticles();
  };

  useEffect(() => {
    loadData();
  }, []);

  useAppState({
    onForeground: () => loadData(),
  });


  const renderForwardPlayersContent = () => {
    const dataMapped = playersStore.news;
    switch (playersStore.state) {
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
            {dataMapped.forwards.map((player, index) => {
              // {console.log("FORWARDS >>> " + JSON.stringify(player))}
              return (
                <PlayersPreview key={index}
                  player={player}
                />
              );
            })}
          </>
        );
    }
  };

  const renderCenterPlayersContent = () => {
    const dataMapped = playersStore.news;
    switch (playersStore.state) {
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
            {dataMapped.centers.map((player, index) => {
              // {console.log("CENTERS >>> " + JSON.stringify(player))}
              return (
                <PlayersPreview style={{ marginTop:200, background: 'red'}}  key={index}
                  player={player}
                />
              );
            })}
          </>
        );
    }
  };
  
  const renderDefensePlayersContent = () => {
    const dataMapped = playersStore.news;
    switch (playersStore.state) {
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
            {dataMapped.defenses.map((player, index) => {
              // {console.log("CENTERS >>> " + JSON.stringify(player))}
              return (
                <PlayersPreview style={{ marginTop:200, background: 'red'}}  key={index}
                  player={player}
                />
              );
            })}
          </>
        );
    }
  };
  
  const renderCoachPlayersContent = () => {
    const dataMapped = playersStore.news;
    switch (playersStore.state) {
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
            {dataMapped.coaches.map((player, index) => {
              // {console.log("CENTERS >>> " + JSON.stringify(player))}
              return (
                <PlayersPreview style={{ marginTop:200, background: 'red'}}  key={index}
                  player={player}
                />
              );
            })}
          </>
        );
    }
  };

  return (
    <RootContainer>
      <Wrapper>
        <ScrollView style={{ height: "100%" }}>
        <BigTitle title="Players" />
        <RowCardsContainer>
        <Caption>Forwards</Caption>
          <ScrollView
            style={{ 
                flexDirection: "row",
                padding: 20,
                paddingLeft: 0
            }}
            horizontal={ true }
            showsHorizontalScrollIndicator= { false }
          >
            { renderForwardPlayersContent() }
          </ScrollView>
        </RowCardsContainer> 

        <RowCardsContainer style={{ marginTop:15 }}>
          <Caption>Centers</Caption>
          <ScrollView
            style={{ 
                flexDirection: "row",
                padding: 20,
                paddingLeft: 0,
            }}
            horizontal={ true }
            showsHorizontalScrollIndicator= { false }
          >
            { renderCenterPlayersContent() }
          </ScrollView>
        </RowCardsContainer> 
        
        <RowCardsContainer style={{ marginTop:15 }}>
          <Caption>Defenses</Caption>
          <ScrollView
            style={{ 
                flexDirection: "row",
                padding: 20,
                paddingLeft: 0,
            }}
            horizontal={ true }
            showsHorizontalScrollIndicator= { false }
          >
            { renderDefensePlayersContent() }
          </ScrollView>
        </RowCardsContainer> 
        
        <RowCardsContainer style={{ marginTop:15 }}>
          <Caption>Coaches</Caption>
          <ScrollView
            style={{ 
                flexDirection: "row",
                padding: 20,
                paddingLeft: 0,
            }}
            horizontal={ true }
            showsHorizontalScrollIndicator= { false }
          >
            { renderCoachPlayersContent() }
          </ScrollView>
        </RowCardsContainer> 
      </ScrollView>
      </Wrapper>
    </RootContainer>
  );
})

export default Players;

const RootContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0%;
    background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.SafeAreaView`
`;

const RowCardsContainer = styled.View`
  flex-direction: column;
  background: ${({ theme }) => theme.accentBackground};
  padding: 15px 0px;
`;

const Caption = styled.Text`
  margin: 15px;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;