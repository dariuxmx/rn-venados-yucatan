import React, { useContext } from "react";
import styled from "styled-components/native";

const StatisticsPreview = ({ statistic }) => {
  // const { gameId } = statistic;  

  return (
    <Container>
      <BrandLogoContainer>
        <Cover source={{ uri: statistic.image }} />
        <Caption>{statistic.team}</Caption>
      </BrandLogoContainer>
      <Content>
        <Title>Team Status</Title>
        <MatchData>
          MP{"\n"}
          {statistic.games}
        </MatchData>
        <MatchData>
          MW{"\n"}
          {statistic.win}
        </MatchData>
        <MatchData>
          POINTS{"\n"}
          {statistic.points}
        </MatchData>
        <Title>POSITION: { statistic.position }</Title>
      </Content>
    </Container>
  );
};

export default StatisticsPreview;

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  padding: 2%;
  background: ${({ theme }) => theme.accentBackground};
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.15);
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 7px;
`;

const Content = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 64%;
  height: auto;
  padding: 15px 2%;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 5px;
  align-items: center;
`;

const MatchData = styled.Text`
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 17px;
  width: 33%
`;

const Caption = styled.Text`
  margin-top: 15px;
  color: ${({ theme }) => theme.text};
  font-size: 19px;
  font-weight: 500;
  text-align: center;
`;

const Title = styled.Text`
  margin: 15px 0;
  color: ${({ theme }) => theme.text};
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;


const Cover = styled.ImageBackground`
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

const BrandLogoContainer = styled.View`
  width: 35%;
  height: auto;
  align-items: center;  
  margin: 3% 0%;
`;
