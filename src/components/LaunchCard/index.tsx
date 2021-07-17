import React from "react";
import { View } from "react-native";

import {
  Container,
  ImageContainer,
  InfoContainer,
  Name,
  AlignCenterRow,
  Info,
} from "./styles";

interface Data {
  name: String;
}

function LaunchCard({ name }: Data) {
  return (
    <Container>
      <ImageContainer />

      <InfoContainer>
        <Name>{name}</Name>

        <View>
          <AlignCenterRow>
            <Info>11:30h</Info>
          </AlignCenterRow>
          <AlignCenterRow>
            <Info>11/11/2021</Info>
          </AlignCenterRow>
        </View>
      </InfoContainer>
    </Container>
  );
}

export default LaunchCard;
