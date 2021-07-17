import React, { useState } from "react";
import { TouchableOpacity, Linking } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Spaceship from "../../assets/spaceship.png";

import { useFav } from "../../hooks/fav";

import { LaunchDTO } from "../../dtos/LaunchDTO";

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
  LaunchImage,
  Cover,
  EmptyList,
  Label,
  GoBackIcon,
  GoBackButton,
} from "./styles";

interface Params {
  launch: LaunchDTO;
}

const LaunchDetail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { launch } = route.params as Params;
  const { favorites, setFavorites } = useFav();

  console.tron.log(favorites);

  const handleFavorite = (item: string) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((fav) => fav !== item));
      return;
    }

    setFavorites([...favorites, item]);
  };

  return (
    <SafeContainer>
      <GoBackButton onPress={navigation.goBack}>
        <GoBackIcon name="chevron-left" />
      </GoBackButton>
      <ScrollContainer bounces={false}>
        <Background>
          <Cover
            source={
              launch.links.flickr_images.length > 0
                ? { uri: launch.links.flickr_images[0] }
                : Spaceship
            }
          />
        </Background>
        <Container>
          <Label>Mission name</Label>
          <LaunchName>{launch.mission_name}</LaunchName>

          <Label>Rocket name</Label>
          <AlignCenterRow>
            <RocketIcon name="rocket1" />
            <RocketName>{launch.rocket.rocket_name}</RocketName>
          </AlignCenterRow>

          {launch.links.article_link && (
            <ActionButton
              onPress={() => Linking.openURL(launch.links.article_link)}
            >
              <ButtonTitle>Read article</ButtonTitle>
            </ActionButton>
          )}

          <Imagelist>
            {launch.links.flickr_images.slice(0, 3).map((image) => (
              <ImageContainer
                key={image}
                onPress={() => handleFavorite(image)}
                active={favorites.includes(image)}
              >
                <LaunchImage source={{ uri: image }} />
                {favorites.includes(image) && <FavoriteIcon name="heart" />}
              </ImageContainer>
            ))}

            {launch.links.flickr_images.length === 0 && (
              <EmptyList>No images found for this launch</EmptyList>
            )}
          </Imagelist>
        </Container>
      </ScrollContainer>
    </SafeContainer>
  );
};

export default LaunchDetail;
