import React, { useContext } from "react";
import styled from "styled-components/native";
import Logo from "../../assets/logo-venados.png";

const MatchGamePreview = ({ matchGame}) => {
  // const { gameId } = matchGame;

  var newMatchDate = new Date(matchGame.datetime);
  const formattedDate = Intl.DateTimeFormat('en-US',{
    year: 'numeric',
    month: 'short',
    day: '2-digit' }).format(newMatchDate);

  return (
    <Container>
      <BrandLogoContainer>
        <Cover source={ Logo } />
        <Caption>Venados F.C.</Caption>
      </BrandLogoContainer>
      <ScoreContainer>
      <ScoreCaption>
        { matchGame.home_score} - { matchGame.away_score}
      </ScoreCaption>
      </ScoreContainer>   
      <BrandLogoContainer>
        <Cover source={{ uri: matchGame.opponent_image }} />
        <Caption>{matchGame.opponent}</Caption>
      </BrandLogoContainer>
      <Content>
        <MatchDate>
         {formattedDate}
        </MatchDate>
      </Content>
    </Container>
  );
};

export default MatchGamePreview;

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
  width: 98%
  height: auto;
  padding: 2%;
  background: ${({ theme }) => theme.inputBackground};
  border-radius: 5px;
  align-items: center;
`;

const MatchDate = styled.Text`
  color: ${({ theme }) => theme.text};
  text-align: center;
`;


const Caption = styled.Text`
  margin-top: 15px;
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  text-align: center;
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

const ScoreContainer = styled.View`
  width: 30%;
  height: 70px;
  margin-top: 34px;
  align-content: center;
  align-items: center;  
  border: 1px solid ${({ theme }) => theme.uiAccent};
  border-radius: 5px;
  background: ${({ theme }) => theme.accentBackground};
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.15);
`;

const ScoreCaption = styled.Text`
  margin-top: 15px;
  color: ${({ theme }) => theme.text};
  font-size: 29px;
  font-weight: 600;
`;