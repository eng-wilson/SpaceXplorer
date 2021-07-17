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

  date: Date;
}

function LaunchCard({ name, date }: Data) {
  return (
    <Container>
      <ImageContainer />

      <InfoContainer>
        <Name>{name}</Name>

        <View>
          <AlignCenterRow>
            <Info>
              {date.getMinutes()}:{date.getHours()}h
            </Info>
          </AlignCenterRow>
          <AlignCenterRow>
            <Info>
              {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
            </Info>
          </AlignCenterRow>
        </View>
      </InfoContainer>
    </Container>
  );
}

export default LaunchCard;
