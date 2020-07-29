import React, { useContext } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import BlackLogo from "../../assets/Images/logo-esports-league.png";
import WhiteLogo from "../../assets/Images/logo-esports-league.png";
import { useColorScheme } from "react-native-appearance";
import AppState from "../stores/AppState";
import { Themes } from "../types";

const { width } = Dimensions.get("window");

const Image = styled.Image`
  height: 90px;
  width: 120px;
  position: absolute;
  top: -10px;
  left: ${width / 2 - 60}px;
`;

const HeaderTitleLogo = styled.Text`
  height: 40px;
  width:  100%;
  text-align: center;
  font-size: 29px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;

// const HeaderTitleLogo = () => {
//   const scheme = useColorScheme();
//   const appStateStore = useContext(AppState);

//   let Logo = BlackLogo;
//   if (appStateStore.theme === Themes.automatic) {
//     if (scheme === "dark") {
//       Logo = WhiteLogo;
//     }
//   } else if (appStateStore.theme === Themes.dark) {
//     Logo = WhiteLogo;
//   }

//   return <Image source={Logo} />;
// };

export default HeaderTitleLogo;
