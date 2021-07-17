import React from "react";
import { FlatList } from "react-native";

import LaunchCard from "../../components/LaunchCard";

import {
  SafeContainer,
  Container,
  ScreenTitle,
  ScreenSubTitle,
} from "./styles";

const LaunchOverview: React.FC = () => {
  return (
    <SafeContainer>
      <Container>
        <ScreenTitle>Welcome to SpaceXplorer</ScreenTitle>
        <ScreenSubTitle>Discover</ScreenSubTitle>

        <FlatList
          data={[1, 2, 3]}
          renderItem={() => <LaunchCard name="Starlink-15 (v1.0)" />}
        />
      </Container>
    </SafeContainer>
  );
};

export default LaunchOverview;
