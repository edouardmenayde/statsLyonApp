import React, {Component} from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import {Router} from "react-native-router-flux";
import Header from "../components/header";
import Scenes from "../scenes";

import {HomeScreen} from "../screens/HomeScreen";

export class App extends Component {
  render() {
    return (
      <Router
        navBar={Header}
        scenes={Scenes}
      />
    );

  }
}