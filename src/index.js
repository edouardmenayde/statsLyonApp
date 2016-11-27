import React, {Component} from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";

import {App} from "./containers/app";

import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
