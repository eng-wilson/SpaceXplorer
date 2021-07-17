import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";

import { client } from "./src/services";
import theme from "./src/global/styles/theme";
import Routes from "./src/routes";
import "./src/config/Reactotron";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
