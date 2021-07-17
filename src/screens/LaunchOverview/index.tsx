import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LaunchCard from "../../components/LaunchCard";

import { useGetLaunches } from "../../hooks/launches/useGetLaunches";

import {
  SafeContainer,
  Container,
  ScreenTitle,
  ScreenSubTitle,
} from "./styles";

function LaunchOverview() {
  const navigation = useNavigation();
  const launches = useGetLaunches();

  return (
    <SafeContainer>
      <Container>
        <ScreenTitle>Welcome to SpaceXplorer</ScreenTitle>
        <ScreenSubTitle>Discover</ScreenSubTitle>

        <FlatList
          data={launches}
          keyExtractor={(item) => item.mission_name}
          renderItem={({ item }) => (
            <LaunchCard
              onPress={() => navigation.navigate("LaunchDetail")}
              name={item.mission_name}
              date={new Date(item.launch_date_local)}
            />
          )}
        />
      </Container>
    </SafeContainer>
  );
}

export default LaunchOverview;
