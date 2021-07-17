import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

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

export const AntDesignIcon = styled(AntDesign)`
  font-size: 18px;

  color: ${({ theme }) => theme.colors.primary};
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

export const Imagelist = styled.FlatList`
  align-self: center;
  margin-top: 20px;
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const ImageContainer = styled.View`
  height: ${screenWidth * 0.4};
  width: ${screenWidth * 0.4};
  background-color: ${({ theme }) => theme.colors.card};

  border-radius: 10px;

  margin: 10px;
`;