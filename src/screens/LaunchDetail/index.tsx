import React, { useState } from "react";
import { TouchableOpacity, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";

import Spaceship from "../../assets/spaceship.png";

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
} from "./styles";

interface Params {
  launch: LaunchDTO;
}

const LaunchDetail: React.FC = () => {
  const route = useRoute();
  const [favorites, setFavorites] = useState<string[]>([]);
  const { launch } = route.params as Params;

  console.tron.log(launch);

  const handleFavorite = (item: string) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((fav) => fav !== item));
      return;
    }

    setFavorites([...favorites, item]);
  };

  return (
    <SafeContainer>
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
              <TouchableOpacity
                key={image}
                onPress={() => handleFavorite(image)}
              >
                <ImageContainer active={favorites.includes(image)}>
                  <LaunchImage source={{ uri: image }} />
                  {favorites.includes(image) && <FavoriteIcon name="heart" />}
                </ImageContainer>
              </TouchableOpacity>
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
