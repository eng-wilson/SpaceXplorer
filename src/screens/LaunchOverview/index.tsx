import React from "react";

import {
  SafeContainer,
  Container,
  ScreenTitle,
  ScreenSubTitle,
} from "./styles";

const LaunchOverview: React.FC = () => {
  return (
    <SafeContainer>
      <Container>
        <ScreenTitle>Welcome to SpaceXplorer</ScreenTitle>
        <ScreenSubTitle>Discover</ScreenSubTitle>
      </Container>
    </SafeContainer>
  );
};

export default LaunchOverview;
