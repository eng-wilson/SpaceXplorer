import React from "react";
import { View } from "react-native";

import {
  Container,
  ImageContainer,
  InfoContainer,
  Name,
  AlignCenterRow,
  Info,
  AntDesignIcon,
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
            <AntDesignIcon name="clockcircleo" />
            <Info>
              {date.getMinutes().toString().padStart(2, "0")}:{date.getHours()}h
            </Info>
          </AlignCenterRow>
          <AlignCenterRow>
            <AntDesignIcon name="calendar" />
            <Info>
              {date.getMonth().toString().padStart(2, "0")}/
              {date.getDate().toString().padStart(2, "0")}/{date.getFullYear()}
            </Info>
          </AlignCenterRow>
        </View>
      </InfoContainer>
    </Container>
  );
}

export default LaunchCard;
