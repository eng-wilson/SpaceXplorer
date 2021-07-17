import React from "react";
import { TouchableOpacity } from "react-native";

import {
  SafeContainer,
  ScrollContainer,
  Background,
  Container,
  LaunchName,
  RocketName,
  AlignCenterRow,
  AntDesignIcon,
  ActionButton,
  ButtonTitle,
  ImageContainer,
  Imagelist,
} from "./styles";

const LaunchDetail: React.FC = () => {
  return (
    <SafeContainer>
      <ScrollContainer bounces={false}>
        <Background />
        <Container>
          <LaunchName>Starlink-15 (v1.0)</LaunchName>
          <AlignCenterRow>
            <AntDesignIcon name="rocket1" />
            <RocketName>Falcon 9</RocketName>
          </AlignCenterRow>

          <ActionButton>
            <ButtonTitle>Read article</ButtonTitle>
          </ActionButton>

          <Imagelist
            data={[1, 2, 3, 4, 5, 6]}
            numColumns={2}
            renderItem={() => (
              <TouchableOpacity>
                <ImageContainer />
              </TouchableOpacity>
            )}
          />
        </Container>
      </ScrollContainer>
    </SafeContainer>
  );
};

export default LaunchDetail;
