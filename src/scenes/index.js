/**
 * Index
 * @flow
 */
import React from "react";
import {StyleSheet} from "react-native";
import HomeScreen from "../screens/homeScreen";
import StationScreen from "../screens/stationScreen";
import {Actions, Scene} from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="home"
      title="Home"
      component={HomeScreen}
      initial
    />
    <Scene
      key="station"
      component={StationScreen}
      title="Station"
    />
  </Scene>
);

export default scenes;
