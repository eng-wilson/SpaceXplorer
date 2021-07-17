import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import LaunchOverview from "../screens/LaunchOverview";
import LaunchDetail from "../screens/LaunchDetail";

const App = createStackNavigator();
function Routes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="LaunchOverview" component={LaunchOverview} />
      <App.Screen name="LaunchDetail" component={LaunchDetail} />
    </App.Navigator>
  );
}

export default Routes;
