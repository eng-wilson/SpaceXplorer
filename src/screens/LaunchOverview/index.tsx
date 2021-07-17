import React from "react";
import { FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StackNavigationParamsList } from "../../config/types";

import LaunchCard from "../../components/LaunchCard";

import {
  SafeContainer,
  Container,
  ScreenTitle,
  ScreenSubTitle,
} from "./styles";

interface LaunchOverviewProps {
  navigation: StackNavigationProp<StackNavigationParamsList>;
}

function LaunchOverview({ navigation }: LaunchOverviewProps) {
  return (
    <SafeContainer>
      <Container>
        <ScreenTitle>Welcome to SpaceXplorer</ScreenTitle>
        <ScreenSubTitle>Discover</ScreenSubTitle>

        <FlatList
          data={[1, 2, 3]}
          renderItem={() => (
            <LaunchCard
              onPress={() => navigation.navigate("LaunchDetail")}
              name="Starlink-15 (v1.0)"
              date={new Date()}
            />
          )}
        />
      </Container>
    </SafeContainer>
  );
}

export default LaunchOverview;
