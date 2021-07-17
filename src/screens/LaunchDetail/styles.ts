import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

interface Props {
  active: boolean;
}

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Background = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const ScrollContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.card};
`;

export const Container = styled.View`
  min-height: 100%;

  padding: 30px 20px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LaunchName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const RocketName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};

  padding-left: 6px;
`;

export const AlignCenterRow = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const RocketIcon = styled(AntDesign)`
  font-size: 18px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const FavoriteIcon = styled(AntDesign)`
  font-size: 18px;

  color: ${({ theme }) => theme.colors.favorite};

  position: absolute;
  right: -9px;
  top: -9px;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 10px;

  margin-top: 20px;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.button_title};
`;

export const Imagelist = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  align-self: center;

  margin-top: 20px;
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const ImageContainer = styled.View<Props>`
  height: ${screenWidth * 0.4}px;
  width: ${screenWidth * 0.4}px;
  background-color: ${({ theme }) => theme.colors.card};

  border-radius: 10px;

  margin: 10px 0px;

  ${({ active, theme }) =>
    active &&
    css`
      border: 2px ${theme.colors.favorite};
    `}
`;

export const LaunchImage = styled.Image`
  flex: 1;
  border-radius: 10px;
`;

export const Cover = styled.Image`
  width: 100%;
  height: 220px;
`;

export const EmptyList = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  text-align: center;
`;
