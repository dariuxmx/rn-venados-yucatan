import React, { useContext } from "react";
import styled from "styled-components/native";
import Logo from "../../assets/logo-venados.png";

const PlayersPreview = ({ player }) => {

  return (
    <Container>
      <AvatarContainer>
        <Avatar source={{ uri: player.image }} />
        <Caption>{player.name} {"\n"} {player.first_surname} {player.second_surname} {"\n"}{"\n"}{player.role}</Caption>
      </AvatarContainer>
  </Container>
  );
};

export default PlayersPreview;

const Caption = styled.Text`
  margin: 15px;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
  font-weight: normal;
  text-align: center;
`;

const AvatarContainer = styled.View`
  width: 210px;
  height: 290px;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.25);
  
`;

const Avatar = styled.ImageBackground`
  width: 190px;
  height: 190px;
  border-radius: 95px;
  overflow: hidden;
`;


const Container = styled.View`
  width: 210px;
  height: 290px;
  margin-left: 10px;
  align-items: center;
`;
