import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  SafeContainer,
  ScrollContainer,
  Background,
  Container,
  LaunchName,
  RocketName,
  AlignCenterRow,
  RocketIcon,
  ActionButton,
  ButtonTitle,
  ImageContainer,
  Imagelist,
  FavoriteIcon,
} from "./styles";

const LaunchDetail: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavorite = (item: string) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((fav) => fav !== item));
      return;
    }
    if (favorites.length <= 2) {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <SafeContainer>
      <ScrollContainer bounces={false}>
        <Background />
        <Container>
          <LaunchName>Starlink-15 (v1.0)</LaunchName>
          <AlignCenterRow>
            <RocketIcon name="rocket1" />
            <RocketName>Falcon 9</RocketName>
          </AlignCenterRow>

          <ActionButton>
            <ButtonTitle>Read article</ButtonTitle>
          </ActionButton>

          <Imagelist>
            {[1, 2, 3, 4].map((launch) => (
              <TouchableOpacity
                onPress={() => handleFavorite(launch.toString())}
              >
                <ImageContainer active={favorites.includes(launch.toString())}>
                  {favorites.includes(launch.toString()) && (
                    <FavoriteIcon name="heart" />
                  )}
                </ImageContainer>
              </TouchableOpacity>
            ))}
          </Imagelist>
        </Container>
      </ScrollContainer>
    </SafeContainer>
  );
};

export default LaunchDetail;
