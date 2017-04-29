import "react-native";
import React from "react";

import {Provider} from "react-redux";
import mockStore from "../__mocks__/redux-mock-store";

import {StationScreen} from "../../src/screens/stationScreen";

import renderer from "react-test-renderer";

// @TODO: mock reducers, actions...

describe('StationScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={mockStore}>
        <StationScreen />
      </Provider>
    );
  });
});
