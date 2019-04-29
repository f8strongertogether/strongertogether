/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import StrongerApp from "./App";
import { name as appName } from "./app.json";

const App = () => (
  <StrongerApp />
);

AppRegistry.registerComponent( appName, () => App );
