import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  padding: 20px;
`;

export const ScreenTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ScreenSubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};

  padding-top: 10px;
`;
