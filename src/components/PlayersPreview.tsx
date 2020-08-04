import React, { useEffect, useContext, useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import Logo from "../../assets/logo-venados.png";
import BigTitle from "../common/BigTitle";

const PlayersPreview = ({ player }) => {

  const [modalVisible, setModalVisible] = useState(false);

  var newMatchDate = new Date(player.birthday);
  const formattedDate = Intl.DateTimeFormat('en-US',{
    year: 'numeric',
    month: 'short',
    day: '2-digit' }).format(newMatchDate);

  return (
    <Container>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <ModalContainer>
          <ModalView>
            <CustomScroll>
              <BigTitle title={player.name + "\n" + player.first_surname + " " + player.second_surname}/>
              <AvatarSmallContainer>
                <Avatar source={{ uri: player.image }} />
                <Caption>{player.position}</Caption>
              </AvatarSmallContainer>
              
              <PlayerDetailsInfoContainer>
                <CaptionDetail>Birthday{"\n"}{formattedDate}</CaptionDetail>
                <CaptionDetail>Birth Place{"\n"}{formattedDate}</CaptionDetail>
                <CaptionDetail>Weight{"\n"}{player.weight}</CaptionDetail>
                <CaptionDetail>Height{"\n"}{player.height}</CaptionDetail>
                <CaptionDetail>Last Team{"\n"}{player.last_team}</CaptionDetail>
              </PlayerDetailsInfoContainer>
              
              <TouchableOpacity
              style={{ position: 'absolute', top: 20, right: 0, paddingTop: 10, width: 70, height: 35 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ textAlign: 'center'}}>Close</Text>
              </TouchableOpacity>
            </CustomScroll>
          </ModalView>
        </ModalContainer>        
      </Modal>

    <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <AvatarContainer>
          <Avatar source={{ uri: player.image }} />
          <Caption>{player.name} {"\n"} {player.first_surname} {player.second_surname} {"\n"}{"\n"}{player.role}</Caption>
        </AvatarContainer>
      </TouchableOpacity>

      
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

const CaptionDetail = styled.Text`
  margin: 15px;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
  font-weight: normal;
  text-align: center;
`;

const AvatarSmallContainer = styled.View`
  width: auto;
  height: auto;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.25);

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

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0.0, 0.0, 0.0, 0.60);
`;

const ModalView = styled.View`
  /*box-shadow: 0 8px 6px rgba(0, 0, 0, 0.25);*/
  background-color: white;
  border-radius: 7px;
  width: 85%;
`;

const CustomScroll = styled.ScrollView`
  padding: 0px 15px 15px 0;
  width: 100%;
`;

const PlayerDetailsInfoContainer = styled.View`
  background: ${({ theme }) => theme.accentBackground};
  margin: 10px 0;
  width: 100%;
`;

const CloseButton = styled.TouchableHighlight`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

