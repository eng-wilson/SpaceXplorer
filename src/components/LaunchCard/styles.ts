import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 120px;

  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;

  margin-top: 15px;

  padding: 10px 20px;
`;

export const ImageContainer = styled.View`
  height: 90px;
  width: 90px;

  background-color: ${({ theme }) => theme.colors.background};

  border-radius: 10px;

  margin-right: 10px;
`;

export const InfoContainer = styled.View`
  height: 90px;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.text};
`;

export const AlignCenterRow = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.text};

  margin-left: 6px;
`;

export const AntDesignIcon = styled(AntDesign)`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.primary};
`;
