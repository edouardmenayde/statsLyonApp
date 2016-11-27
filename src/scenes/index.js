import React from "react";
import {StyleSheet} from "react-native";
import {HomeScreen} from "../screens/HomeScreen";
import {StationScreen} from "../screens/StationScreen";
import {Actions, Scene} from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" title="Home">
      <Scene
        key="red"
        component={HomeScreen}
        title="red"
        initial
      />
      <Scene
        key="station"
        component={StationScreen}
        title="Station"
      />
    </Scene>
  </Scene>
);

export default scenes;
