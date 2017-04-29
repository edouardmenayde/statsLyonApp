/**
 * Index
 * @flow
 */
import React, {Component} from "react";

import {App} from "./containers/app";

import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

export default function setup() {
  class Index extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }
  return Index;
}
