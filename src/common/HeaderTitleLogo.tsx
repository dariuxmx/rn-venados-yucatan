import React, { useEffect, useContext } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Logo from "../../assets/logo-venados.png";

const HeaderTitleLogo = () => {
  return (
    <BrandLogoContainer>
      <Image source={ Logo }/>
    </BrandLogoContainer>
  )
};

export default HeaderTitleLogo;

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