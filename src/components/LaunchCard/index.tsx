import React from "react";
import { View } from "react-native";

import Spaceship from "../../assets/spaceship.png";

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
  name: string;
  imageSource: string[];
  onPress: Function;
  date: Date;
}

function LaunchCard({ name, onPress, imageSource, date }: Data) {
  return (
    <Container onPress={() => onPress()}>
      <ImageContainer
        source={imageSource.length > 0 ? { uri: imageSource[0] } : Spaceship}
      />

      <InfoContainer>
        <Name>{name}</Name>

        <View>
          <AlignCenterRow>
            <AntDesignIcon name="clockcircleo" />
            <Info>
              {date.getHours()}:{date.getMinutes().toString().padStart(2, "0")}h
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
