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
import { LaunchDTO } from "../../dtos/LaunchDTO";

function LaunchOverview() {
  const navigation = useNavigation();
  const launches = useGetLaunches();

  const handleNavigation = (launch: LaunchDTO) => {
    navigation.navigate("LaunchDetail", { launch });
  };

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
              onPress={() => handleNavigation(item)}
              name={item.mission_name}
              imageSource={item.links.flickr_images}
              date={new Date(item.launch_date_local)}
            />
          )}
        />
      </Container>
    </SafeContainer>
  );
}

export default LaunchOverview;
